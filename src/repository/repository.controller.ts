import { Controller, Get, NotFoundException, Query} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, firstValueFrom } from 'rxjs'

import { RepositoryService } from './repository.service';
import { TribeService } from './tribe.service';
import { SelectTribeDto } from './dto/tribe.dto'
import { STATE_API_LABEL, STATUS_API_LABEL, MIN_REQUIRED_COVERAGE } from './entities/constants';

@Controller('repositories')
export class RepositoryController {
    constructor(
        private readonly repositoryService: RepositoryService,
        private readonly tribeService: TribeService,
        private readonly httpService: HttpService
    ) {}

    @Get()
    async findRepoMetricsByTribe(@Query() query: SelectTribeDto) {
        const tribe = await this.tribeService.getTribeById(query.tribeId)
        // RESUELVE Ejercicio 3 Escenario 2
        if (!tribe) throw new NotFoundException('La tribu no se encuentra registrada')
        const coverage = query.coverage ? query.coverage : MIN_REQUIRED_COVERAGE
        const repoRequiredCoverage = await this.repositoryService.atLeastRepositoryByRequiredCoverage(tribe, coverage)
        // RESUELVE Ejercicio 3 Escenario 4
        if (!repoRequiredCoverage) throw new NotFoundException('La tribu no tiene repositorios que cumplan con la cobertura necesaria')
        const repositories = await this.repositoryService.getMetricsByTribe(tribe, query.state, query.create_time_gt, coverage)
        let mockRepoStatusRes = []
        try {
            mockRepoStatusRes = await firstValueFrom(
                this.httpService.get('http://localhost:3000/exercise1/').pipe(map((response) => (response.data)))
            )
        } catch (errr) {}
        
        const results = repositories.map((repo) => {
            const repoStatusCode = mockRepoStatusRes.find((item) => item.id == repo.id)
            const statusLabel = (repoStatusCode) ? STATUS_API_LABEL[repoStatusCode.state] : '-'
            return {
                id: repo.id,
                name: repo.name,
                tribe: repo.tribe.name,
                organization: tribe.organization.name,
                coverage: repo.metric.coverage,
                codeSmells: repo.metric.codeSmells,
                bugs: repo.metric.bugs,
                vulnerabilities: repo.metric.vulnerabilities,
                hotspots: repo.metric.hotspot,
                state: STATE_API_LABEL[repo.state],
                verificationState: statusLabel
            }
        })
        return {repositories: results}
    }
}

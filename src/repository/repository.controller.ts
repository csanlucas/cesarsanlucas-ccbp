import { Controller, Get, NotFoundException, Query} from '@nestjs/common';

import { RepositoryService } from './repository.service';
import { TribeService } from './tribe.service';
import { SelectTribeDto } from './dto/tribe.dto'
import { STATE_API_LABEL } from './entities/constants';

@Controller('repositories')
export class RepositoryController {
    constructor(
        private readonly repositoryService: RepositoryService,
        private readonly tribeService: TribeService
    ) {}

    @Get()
    async findRepoMetricsByTribe(@Query() query: SelectTribeDto) {
        const tribe = await this.tribeService.getTribeById(query.tribeId)
        if (!tribe) throw new NotFoundException('La tribu no se encuentra registrada') // TODO RESUELVE TEST CASE 2 
        const repositories = await this.repositoryService.getMetricsByTribe(tribe)
        const results = repositories.map((repo) => {
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
                state: STATE_API_LABEL[repo.state]
            }
        })
        return results
    }
}

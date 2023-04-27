import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual } from 'typeorm';

import RepositoryEnt from './entities/repository.entity'
import Tribe from './entities/tribe.entity';
import { REPO_STATE_TYPE } from './entities/constants';

@Injectable()
export class RepositoryService {
    constructor(
        @InjectRepository(RepositoryEnt) private repoRepository: Repository<RepositoryEnt>,
    ){}

    async atLeastRepositoryByRequiredCoverage(tribe: Tribe, coverage: number) {
        return this.repoRepository.findOne({where: {tribe, metric: {coverage: MoreThanOrEqual(coverage)}}});
    }

    async getMetricsByTribe(tribe: Tribe, state: REPO_STATE_TYPE, createTime: string, coverage: number): Promise<RepositoryEnt[]> { 
        const dateToQuery = createTime ? new Date(createTime) : new Date(new Date().getFullYear());
        const stateToQuery = state ? state : undefined;
        const repositories = this.repoRepository.find({
                where: {tribe, state: stateToQuery, createTime: MoreThanOrEqual(dateToQuery), metric: {coverage: MoreThanOrEqual(coverage)}},
                relations: ['tribe', 'metric']
            });
        return repositories;
    }
}

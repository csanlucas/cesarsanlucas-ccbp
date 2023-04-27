import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import RepositoryEnt from './entities/repository.entity'
import Tribe from './entities/tribe.entity';
import Metric from './entities/metric.entity';

@Injectable()
export class RepositoryService {
    constructor(
        @InjectRepository(RepositoryEnt) private repoRepository: Repository<RepositoryEnt>,
        @InjectRepository(Metric) private metricRepository: Repository<Metric>
    ){}

    async getMetricsByTribe(tribe: Tribe): Promise<RepositoryEnt[]> { 
        const repositories = this.repoRepository.find({where: {tribe}, relations: ['tribe', 'metric']})
        return repositories
    }
}

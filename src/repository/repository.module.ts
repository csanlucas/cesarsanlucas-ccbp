import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Metric from './entities/metric.entity';
import Repository from './entities/repository.entity';
import Tribe from './entities/tribe.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Repository, Tribe, Metric])]
})
export class RepositoryModule {};

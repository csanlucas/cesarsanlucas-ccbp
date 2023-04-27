import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios'

import Metric from './entities/metric.entity';
import Repository from './entities/repository.entity';
import Tribe from './entities/tribe.entity';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from './repository.service';
import { TribeService } from './tribe.service';

@Module({
    imports: [TypeOrmModule.forFeature([Repository, Tribe, Metric]), HttpModule],
    controllers: [RepositoryController],
    providers: [RepositoryService, TribeService]
})
export class RepositoryModule {};

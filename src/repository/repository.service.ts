import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SelectTribeDto } from './dto/tribe.dto';
import RepositoryEnt from './entities/repository.entity'

@Injectable()
export class RepositoryService {
    constructor(
        @InjectRepository(RepositoryEnt) private repoRepository: Repository<RepositoryEnt>
    ){}
}

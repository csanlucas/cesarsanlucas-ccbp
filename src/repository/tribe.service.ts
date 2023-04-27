import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Tribe from './entities/tribe.entity'

@Injectable()
export class TribeService {
    constructor(
        @InjectRepository(Tribe) private tribeRepository: Repository<Tribe>
    ){}

    async getTribeById(id: number): Promise<Tribe> { 
        return this.tribeRepository.findOne({where: {id}, relations: ['organization']})
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrganizationDto, UpdateOrganizationDto } from './dto/opsOrganization.dto';
import Organization from './entities/organization.entity';

@Injectable()
export class OrganizationService {
    constructor(
        @InjectRepository(Organization) private organizationRepository: Repository<Organization>
    ){}

    async getAllOrganizations(): Promise<Organization[]> {
        return this.organizationRepository.find();
    }

    async getOrganizationById(id: number): Promise<Organization> {
        return this.organizationRepository.findOne({where: {id}});
    }

    async create(organization: CreateOrganizationDto): Promise<Organization> {
        const newOrganization = this.organizationRepository.create(organization);
        return this.organizationRepository.save(newOrganization);
    }

    async update(id: number, organization: UpdateOrganizationDto): Promise<Organization> {
        await this.organizationRepository.update(id, organization);
        return this.organizationRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.organizationRepository.delete(id)
    }
}

import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import Organization from './entities/organization.entity';
import { CreateOrganizationDto, UpdateOrganizationDto } from './dto/opsOrganization.dto';

@Controller('organizations')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    @Get()
    async findAll(): Promise<Organization[]> {
        return this.organizationService.getAllOrganizations();
    }

    @Get(':id')
    async findOneOrganization(@Param('id') id: number): Promise<Organization> {
        const organization = await this.organizationService.getOrganizationById(id);
        if (organization) return organization
        throw new NotFoundException('Organization does not exist!');
    }

    @Post()
    async create(@Body() organization: CreateOrganizationDto): Promise<Organization> {
        return this.organizationService.create(organization);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() organization: UpdateOrganizationDto): Promise<Organization> {
        return this.organizationService.update(id, organization);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        const organization = await this.organizationService.getOrganizationById(id);
        if (organization) return this.organizationService.delete(id);
        throw new NotFoundException('Organization can not be deleted or it does not exist');
    }
}

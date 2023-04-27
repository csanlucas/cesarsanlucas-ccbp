import { IsString, IsNumber, IsNotEmpty, MaxLength } from 'class-validator'
import { NAME_ATTR_MAX_LENGTH } from '../entities/constants';

export class CreateOrganizationDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(NAME_ATTR_MAX_LENGTH)
    name: string;

    @IsNumber()
    status: number;
}

export class UpdateOrganizationDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(NAME_ATTR_MAX_LENGTH)
    name: string;

    @IsNumber()
    status: number;
}

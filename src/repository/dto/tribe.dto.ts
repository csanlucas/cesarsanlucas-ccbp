import { IsNumberString, IsNotEmpty, IsOptional, IsDateString, IsEnum } from 'class-validator';

import { REPO_STATE_TYPE } from '../entities/constants'


export class SelectTribeDto {
    @IsNotEmpty()
    @IsNumberString()
    tribeId: number;

    @IsOptional()
    @IsEnum(REPO_STATE_TYPE)
    state: REPO_STATE_TYPE

    @IsOptional()
    @IsDateString()
    create_time_gt: string

    @IsOptional()
    @IsNumberString()
    coverage: number
}

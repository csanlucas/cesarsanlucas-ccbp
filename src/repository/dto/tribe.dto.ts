import { IsNumber } from 'class-validator';


export class SelectTribeDto {
    @IsNumber()
    tribeId: number;
}

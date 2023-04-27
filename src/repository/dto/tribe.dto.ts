import { IsNumberString, IsNotEmpty } from 'class-validator';


export class SelectTribeDto {
    @IsNotEmpty()
    @IsNumberString()
    tribeId: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LaboratorioDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    laboratorioID: string;

    @IsString()
    @IsNotEmpty()
    resultadoID: string;

    @IsString()
    @IsNotEmpty()
    medicoID: string;

    @IsString()
    @IsNotEmpty()
    nombreLaboratorio: string;

    @IsString()
    @IsNotEmpty()
    direccionLaboratorio: string;

    @IsString()
    @IsNotEmpty()
    telefonoLaboratorio: string;

    @IsNumber()
    @IsNotEmpty()
    tipo: number;
}

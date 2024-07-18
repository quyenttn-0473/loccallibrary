import { ArrayNotEmpty, IsArray, IsDateString, IsInt, IsNumberString, IsOptional, IsString } from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    first_name: string;

    @IsString()
    family_name: string;

    @IsString()
    @IsOptional()
    date_of_birth: string;

    @IsString()
    @IsOptional()
    date_of_death: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    url: string;
}

import { ArrayNotEmpty, IsArray, IsInt, IsNumberString, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
    @IsString()
    title: string;

    @IsString()
    summary: string;

    @IsString()
    @IsOptional()
    isbn: string;

    @IsString()
    @IsOptional()
    url: string;

    @IsNumberString()
    author_id: number;

    @IsArray()
    @IsNumberString(undefined, { each: true })
    genres: number[];
}

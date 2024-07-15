import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();
import { Author } from './entity/Author';
import { Book } from './entity/Book';
import { BookInstance } from './entity/BookInstance';
import { Genre } from './entity/Genre';
import { join } from 'path';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT || '3306', 10),
    synchronize: false,
    logging: true,
    entities: [join(__dirname, '../src/entity/*.{ts,js}')],
    migrations: [join(__dirname, '../src/config/migrations/*.{ts,js}')],
});

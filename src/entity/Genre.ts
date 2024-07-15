import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'varchar', nullable: false })
    url?: string;

    @ManyToMany(() => Book, (book) => book.genres)
    books: Book[];
}

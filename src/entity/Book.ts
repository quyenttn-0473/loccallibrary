import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    JoinTable,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { Author } from './Author';
import { Genre } from './Genre';
import { BookInstance } from './BookInstance';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    title: string;

    @Column({ type: 'varchar', nullable: false })
    summary: string;

    @Column({ type: 'varchar', nullable: false })
    isbn?: string;

    @ManyToOne(() => Author, (author) => author.books, { nullable: false })
    @JoinColumn({ name: 'author_id' })
    author: Author;

    @ManyToMany(() => Genre)
    @JoinTable()
    genres: Genre[];

    @Column({ type: 'varchar', nullable: false })
    url: string;

    @OneToMany(() => BookInstance, (bookInstance) => bookInstance.book)
    bookInstances: BookInstance[];
}

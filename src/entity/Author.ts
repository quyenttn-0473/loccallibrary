import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    first_name: string;

    @Column({ type: 'varchar', nullable: false })
    family_name: string;

    @Column({ type: 'date', nullable: false })
    date_of_birth?: Date;

    @Column({ type: 'date', nullable: true })
    date_of_death?: Date;

    @Column({ type: 'varchar', nullable: false })
    name?: string;

    @Column({ type: 'varchar', nullable: false })
    url?: string;

    @OneToMany(() => Book, (book: Book) => book.author)
    books: Book[];
}

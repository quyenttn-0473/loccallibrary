import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Book } from './Book';

@Entity()
export class BookInstance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    imprint: string;

    @Column({ type: 'varchar', nullable: false })
    status: string;

    @Column({ type: 'date', nullable: true })
    due_back?: Date;

    @Column({ type: 'varchar', nullable: false })
    url?: string;

    @ManyToOne(() => Book, (book) => book.bookInstances, { nullable: false })
    @JoinColumn({ name: 'book_id' })
    book: Book;
}

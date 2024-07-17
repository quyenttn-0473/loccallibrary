import { AppDataSource } from '../data-source';
import { Book } from './../entity/Book';

class BookService {
    private BookRepository = AppDataSource.getRepository(Book);

    async countBook() {
        return await this.BookRepository.count();
    }

    async getListBook() {
        const books = await this.BookRepository.createQueryBuilder('book')
            .leftJoinAndSelect('book.author', 'author')
            .select(['book.id', 'book.title', 'book.summary', 'book.isbn', 'book.url', 'author.name'])
            .getMany();
        return books.map((book) => ({
            ...book,
            name_author: book.author.name,
        }));
    }
}

export default new BookService();

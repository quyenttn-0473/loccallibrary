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

    async getBookById(id: number) {
        const book = await this.BookRepository.findOne({
            relations: ['author', 'genres', 'bookInstances'],
            where: { id: id },
        });
        return {
            book,
            bookInstances: book?.bookInstances,
            bookGenres: book?.genres,
            bookAuthor: book?.author,
            bookInfo: {
                title: book?.title,
                summary: book?.summary,
                isbn: book?.isbn,
                url: book?.url
            }
        };
    }

    async getBooksByAuthor(id: number) {
        const books = await this.BookRepository.find({
            where: { author: {id } },
        });
        return books;
    }
    async getBooksByGenreId(genreId: number): Promise<Book[]> {
        const books = await this.BookRepository
        .createQueryBuilder('book')
        .innerJoin('book.genres', 'genre') 
        .where('genre.id = :genreId', { genreId }) 
        .getMany();
        return books;
    }
}

export default new BookService();

import { AppDataSource } from '../data-source';
import { Book } from './../entity/Book';

class BookService {
    private BookRepository = AppDataSource.getRepository(Book);

    async countBook() {
        return await this.BookRepository.count();
    }
}
export default new BookService();

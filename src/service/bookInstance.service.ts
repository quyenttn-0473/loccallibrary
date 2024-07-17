import { AppDataSource } from '../data-source';
import { BookInstance } from './../entity/BookInstance';

class BookInstanceService {
    private BookInstanceRepository = AppDataSource.getRepository(BookInstance);

    async countBookInstance() {
        return await this.BookInstanceRepository.count();
    }

    async list() {
        const bookInstances = await this.BookInstanceRepository.createQueryBuilder('bookInstance')
            .leftJoinAndSelect('bookInstance.book', 'book')
            .select(['bookInstance', 'book.title'])
            .getMany();

        return bookInstances.map((bookInstance) => ({
            ...bookInstance,
            book_name: bookInstance.book.title,
        }));
    }
}

export default new BookInstanceService();

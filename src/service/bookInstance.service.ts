import { AppDataSource } from '../data-source';
import { BookInstance } from './../entity/BookInstance';

class BookInstanceService {
    private BookInstanceRepository = AppDataSource.getRepository(BookInstance);

    async countBookInstance() {
        return await this.BookInstanceRepository.count();
    }
}
export default new BookInstanceService();

import { AppDataSource } from '../data-source';
import { Author } from '../entity/Author';

class AuthorService {
    private authorRepository = AppDataSource.getRepository(Author);

    async countAuthor() {
        return await this.authorRepository.count();
    }
}
export default new AuthorService();

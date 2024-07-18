import { AppDataSource } from '../data-source';
import { Author } from '../entity/Author';

class AuthorService {
    private authorRepository = AppDataSource.getRepository(Author);

    async countAuthor() {
        return await this.authorRepository.count();
    }

    async list() {
        return await this.authorRepository.find();
    }
    async authorById(id: number) {
        return await this.authorRepository.findOne({
            where: {
                id: id,
            },
            relations: ['books'],
        });
    }
}

export default new AuthorService();

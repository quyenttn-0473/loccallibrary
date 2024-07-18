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
            relations: ['book'],
        });
    }
    async create(authorData: Partial<Author>) {
        let author = new Author();
        Object.assign(author, authorData);
        await this.authorRepository.save(author);
    }
    async delete(id: number) {
        await this.authorRepository.delete({ id });
    }
}

export default new AuthorService();

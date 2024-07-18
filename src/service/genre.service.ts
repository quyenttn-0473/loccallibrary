import { AppDataSource } from '../data-source';
import { Genre } from '../entity/Genre';

class GenreService {
    private GenreRepository = AppDataSource.getRepository(Genre);

    async countGenre() {
        return await this.GenreRepository.count();
    }

    async list() {
        return await this.GenreRepository.find();
    }
    async detail(id: number) {
        return await this.GenreRepository.findOne({
            where: { id },
        });
    }
}

export default new GenreService();

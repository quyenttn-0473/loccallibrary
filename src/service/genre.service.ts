import { AppDataSource } from '../data-source';
import { Genre } from '../entity/Genre';

class GenreService {
    private GenreRepository = AppDataSource.getRepository(Genre);

    async countGenre() {
        return await this.GenreRepository.count();
    }
}
export default new GenreService();

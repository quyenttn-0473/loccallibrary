import { BaseResponse } from '../base-response';
import { StatusCode } from '../constant/statusCode';
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
    async listGenreById(genreArray: number[]) {
        const genres = await this.GenreRepository.find({
            where: genreArray.map((id) => ({ id })),
        });
        return [...genres];
    }
    async detail(id: number) {
        return await this.GenreRepository.findOne({
            where: { id },
        });
    }
    async create(genreData: Genre) {
        let genre = new Genre();
        Object.assign(genre, genreData);
        await this.GenreRepository.save(genre);
    }
}

export default new GenreService();

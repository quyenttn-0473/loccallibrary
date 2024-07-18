import { Request, Response } from 'express';
import genreService from '../service/genre.service';
import bookService from '../service/book.service';

export class GenreController {
    static list = async (req: Request, res: Response) => {
        try {
            const genres = await genreService.list();
            res.render('genre/index', { genres });
        } catch (error) {
            res.redirect('/genre');
        }
    };

    static detail = async (req: Request, res: Response) => {
        const { id } = req.params;
        const genre = await genreService.detail(parseInt(id));
        const books = await bookService.getBooksByGenreId(parseInt(id));
        console.log('book: ', books);
        res.render('genre/show', {
            genre,
            books,
        });
    };

    static create = async (req: Request, res: Response) => {
        res.send(`NOT IMPLEMENTED: Create Genre`);
    };

    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`NOT IMPLEMENTED: Update Genre By ${id}`);
    };

    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`NOT IMPLEMENTED: Delete Genre By ${id}`);
    };
}

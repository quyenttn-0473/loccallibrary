import { Request, Response } from 'express';
import i18next from 'i18next';
import AuthorService from '../service/author.service';
import BookService from '../service/book.service';
import BookInstanceService from '../service/bookInstance.service';
import GenreService from '../service/genre.service';
import { sendFlashMessage } from '../flashMessageHelper';

export class AllController {
    static counts = async (req: Request, res: Response) => {
        try {
            const [numAuthor, numBook, numBookInstance, numGenre] = await Promise.all([
                AuthorService.countAuthor(),
                BookService.countBook(),
                BookInstanceService.countBookInstance(),
                GenreService.countGenre(),
            ]);
            sendFlashMessage(req, 'success', 'mess.counts.success');
            res.render('index', {
                book_count: numBook,
                book_instance_count: numBookInstance,
                author_count: numAuthor,
                genre_count: numGenre,
            });
        } catch (error) {
            sendFlashMessage(req, 'error', 'mess.counts.error');
            res.redirect('/index');
        }
    };
}

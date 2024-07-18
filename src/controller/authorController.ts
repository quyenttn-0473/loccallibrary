import { Request, Response } from 'express';
import { sendFlashMessage } from '../flashMessageHelper';
import authorService from '../service/author.service';
import bookService from '../service/book.service';

export class AuthorController {
    static list = async (req: Request, res: Response) => {
        try {
            const authors = await authorService.list();
            res.render('author/index', { authors });
        } catch (error) {
            res.redirect('/author');
        }
    };

    static detail = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const books = await bookService.getBooksByAuthor(parseInt(id));
            const author = await authorService.authorById(parseInt(id));

            res.render('author/show', {
                books,
                author,
            });
        } catch (error) {
            sendFlashMessage(req, 'error', 'mess.select.error');
            res.redirect('/author');
        }
    };
    static getCreate = async (req: Request, res: Response) => {
        res.render('author/create');
    };
    static create = async (req: Request, res: Response) => {
        try {
            await authorService.create(req.body);
            sendFlashMessage(req, 'success', 'mess_author.create.success');
            res.redirect('/author');
        } catch (error) {
            sendFlashMessage(req, 'error', 'mess_author.create.error');
            res.redirect('/author');
        }
    };

    static update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            res.send(`NOT IMPLEMENTED: Update Author By ${id}`);
        } catch (error) {
            sendFlashMessage(req, 'error', 'mess_author.update.error');
            res.redirect('/author');
        }
    };

    static getDelete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const author = await authorService.authorById(parseInt(id));
            const books = await bookService.getBooksByAuthor(parseInt(id));
            if (books.length > 0) {
                sendFlashMessage(req, 'error', 'mess_author.delete.error');
                return res.redirect(`../../author/${id}`);
            }
            res.render('author/deletePage', {
                author,
            });
        } catch (error) {
            sendFlashMessage(req, 'error', 'mess_author.delete.error');
            res.redirect('/author');
        }
    };
    static delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await authorService.delete(parseInt(id));
            sendFlashMessage(req, 'success', 'mess_author.delete.success');
            res.redirect('/author'); // or any other response
        } catch (error) {
            sendFlashMessage(req, 'error', 'mess_author.delete.error');
            res.redirect('/author');
        }
    };
}

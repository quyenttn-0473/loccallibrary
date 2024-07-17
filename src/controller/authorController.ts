import { Request, Response } from 'express';
import { sendFlashMessage } from '../flashMessageHelper';
import authorService from '../service/author.service';

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
            res.send(`Author Detail: ${id}`);
        } catch (error) {
            res.redirect('/author');
        }
    };

    static addAuthorForm = (req: Request, res: Response) => {
        res.render('addAuthor');
    };

    static create = async (req: Request, res: Response) => {
        try {
            res.send(`NOT IMPLEMENTED: Create Author`);
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

    static delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            res.send(`NOT IMPLEMENTED: Delete Author By ${id}`);
        } catch (error) {
            sendFlashMessage(req, 'error', 'mess_author.delete.error');
            res.redirect('/author');
        }
    };
}

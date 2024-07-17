import { Request, Response } from 'express';
import bookInstanceService from '../service/bookInstance.service';
import { sendFlashMessage } from '../flashMessageHelper';
import { BookStatus } from '../enums/bookStatus';

export class BookInstanceController {
    static list = async (req: Request, res: Response) => {
        try {
            const bookInstances = await bookInstanceService.list();
            res.render('book_instance/index', { bookInstances, status: BookStatus });
        } catch (error) {
            sendFlashMessage(req, 'error', 'mess_author.create.error');
            res.redirect('/book_instance');
        }
    };

    static detail = async (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`NOT IMPLEMENTED: BookInstance Detail By ${id}`);
    };

    static create = async (req: Request, res: Response) => {
        res.send(`NOT IMPLEMENTED: Create BookInstance`);
    };

    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`NOT IMPLEMENTED: Update BookInstance By ${id}`);
    };

    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`NOT IMPLEMENTED: Delete BookInstance By ${id}`);
    };
}

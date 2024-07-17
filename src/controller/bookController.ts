import { Request, Response } from 'express';

export class BookController {
    static list = async (req: Request, res: Response) => {
        try {
            res.send(`NOT IMPLEMENTED: Book List`);
        } catch (error) {
            res.redirect('/book');
        }
    };

    static detail = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            res.send(`NOT IMPLEMENTED: Book Detail By ${id}`);
        } catch (error) {
            res.redirect('/book');
        }
    };

    static create = async (req: Request, res: Response) => {
        try {
            res.send(`NOT IMPLEMENTED: Create Book`);
        } catch (error) {
            res.redirect('/book');
        }
    };

    static update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            res.send(`NOT IMPLEMENTED: Update Book By ${id}`);
        } catch (error) {
            res.redirect('/book');
        }
    };

    static delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            res.send(`NOT IMPLEMENTED: Delete Book By ${id}`);
        } catch (error) {
            res.redirect('/book');
        }
    };
}

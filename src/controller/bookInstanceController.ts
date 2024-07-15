import { Request, Response } from 'express';

export class BookInstanceController {
    static list = async (req: Request, res: Response) => {
        res.send(`NOT IMPLEMENTED: BookInstance List`);
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

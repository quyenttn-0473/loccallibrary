import { Request, Response } from 'express';

export class GenreController {
    static list = async (req: Request, res: Response) => {
        res.send(`NOT IMPLEMENTED: Genre List`);
    };

    static detail = async (req: Request, res: Response) => {
        const { id } = req.params;
        res.send(`NOT IMPLEMENTED: Genre Detail By ${id}`);
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

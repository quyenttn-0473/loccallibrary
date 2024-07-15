import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Author } from '../entity/Author';

export class AuthorController {
    static authorRepository = AppDataSource.getRepository(Author);
    static list = async (req: Request, res: Response) => {
        try {
            const authors = await this.authorRepository.find();
            res.render('author', { authors });
        } catch (error: any) {
            console.error('Error fetching authors:', error);
            res.redirect('/author');
        }
    };

    static detail = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            res.send(`Author Detail: ${id}`);
        } catch (error: any) {
            console.error('Error fetching author:', error);
            res.redirect('/author');
        }
    };

    static addAuthorForm = (req: Request, res: Response) => {
        res.render('addAuthor');
    };

    static create = async (req: Request, res: Response) => {
        try {
            res.send(`NOT IMPLEMENTED: Create Author`);
        } catch (error: any) {
            console.error('Error creating author:', error);
            res.redirect('/author');
        }
    };

    static update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            res.send(`NOT IMPLEMENTED: Update Author By ${id}`);
        } catch (error: any) {
            console.error('Error updating author:', error);
            res.redirect('/author');
        }
    };

    static delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            res.send(`NOT IMPLEMENTED: Delete Author By ${id}`);
        } catch (error: any) {
            console.error('Error deleting author:', error);
            res.redirect('/author');
        }
    };
}

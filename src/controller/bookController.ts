import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Book } from '../entity/Book';

export class BookController {
    static bookRepository = AppDataSource.getRepository(Book);
    static list = async (req: Request, res: Response) => {
        try {
            const books = await this.bookRepository.find();
            res.render('book/book', { books });
        } catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).send('Internal Server Error');
        }
    };
    static detail = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const book = await this.bookRepository.findOneBy({ id: parseInt(id) });

            if (!book) {
                res.status(404).send('book not found');
                return;
            }

            res.render('bookDetail', { book });
        } catch (error) {
            console.error('Error fetching authors:', error);
            res.status(500).send('Internal Server Error');
        }
    };
}

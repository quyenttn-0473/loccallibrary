import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';

import { Author } from '../entity/Author';

export class AuthorController {
    static list = async (req: Request, res: Response) => {
        try {
            const authorRepository = AppDataSource.getRepository(Author);
            const authors = await authorRepository.find();
            res.render('author', { authors });
        } catch (error) {
            console.error('Error fetching authors:', error);
            res.status(500).send('Internal Server Error');
        }
    };
    static detail = async (req: Request, res: Response) => {
        try {
            const authorRepository = AppDataSource.getRepository(Author);
            const { id } = req.params;
            const author = await authorRepository.findOneBy({ id: parseInt(id) });

            if (!author) {
                res.status(404).send('Author not found');
                return;
            }

            res.render('authorDetail', { author });
        } catch (error) {
            console.error('Error fetching authors:', error);
            res.status(500).send('Internal Server Error');
        }
    };
    static addAuthorForm = (req: Request, res: Response) => {
        res.render('addAuthor');
    };
    static create = async (req: Request, res: Response) => {
        try {
            const authorRepository = AppDataSource.getRepository(Author);
            // C2
            let author = new Author();
            Object.assign(author, req.body);
            // AUTO VALIDATE
            await authorRepository.save(author);
            res.redirect('/author');
        } catch (error) {
            console.error('Error creating author:', error);
            res.status(500).send('Internal Server Error');
        }
    };

    static update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const authorRepository = AppDataSource.getRepository(Author);
            const authorToUpdate = await authorRepository.findOneBy({ id: parseInt(id) });
            if (!authorToUpdate) {
                return res.status(404).json({ error: 'Not found' });
            }
            if (!authorToUpdate) {
                res.status(404).send('Author not found');
                return;
            }

            Object.assign(authorToUpdate, req.body);
            await authorRepository.save(authorToUpdate);

            res.redirect('/author');
        } catch (error) {
            console.error('Error updating author:', error);
            res.status(500).send('Internal Server Error');
        }
    };

    static delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const authorRepository = AppDataSource.getRepository(Author);

            // Kiểm tra xem có sách nào đang tham chiếu đến tác giả này không
            const author = await authorRepository.findOne({ where: { id: parseInt(id) }, relations: ['books'] });
            if (author && author.books.length > 0) {
                // Nếu có sách tham chiếu đến tác giả, bạn có thể xử lý ở đây
                // req.flash('error', 'Cannot delete author with associated books');
                // res.redirect('/author');

                return res.status(400).json({ message: 'Cannot delete author with associated books' });
            }

            // Nếu không có sách nào tham chiếu đến tác giả, tiến hành xóa
            await authorRepository.delete({ id: parseInt(id) });

            // Thông báo xóa thành công và chuyển hướng về trang danh sách tác giả
            // req.flash('success', 'Author deleted successfully');
            res.redirect('/author');
        } catch (error) {
            console.error('Error deleting author:', error);
            req.flash('error', 'Failed to delete author');
            res.status(500).send('Internal Server Error');
        }
    };
}

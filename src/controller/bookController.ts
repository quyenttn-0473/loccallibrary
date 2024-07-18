import { Author } from './../entity/Author';
import { Request, Response } from 'express';
import bookService from '../service/book.service';
import authorService from '../service/author.service';
import { sendFlashMessage } from '../flashMessageHelper';

export class BookController {
    static list = async (req: Request, res: Response) => {
        try {
            const books = await bookService.getListBook();
            const authors = await authorService.list();
            res.render('book/index', { books, authors });
        } catch (error) {
            res.redirect('/book');
        }
    };

    static detail = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
                sendFlashMessage(req, 'error', 'mess.select.error');
            }
            const bookDetail = await bookService.getBookById(parseInt(id));
            if(bookDetail) {
                sendFlashMessage(req, 'error', 'mess.select.error')
                res.redirect('/book')
            }
            res.render('book/show', {
                book: bookDetail,
                bookInstances: bookDetail?.bookInstances ,
                bookGenres: bookDetail?.bookGenres,
                author: bookDetail.bookAuthor,
                bookInfo: bookDetail.bookInfo
            });
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

import { Author } from './../entity/Author';
import { NextFunction, Request, Response } from 'express';
import bookService from '../service/book.service';
import authorService from '../service/author.service';
import { sendFlashMessage } from '../flashMessageHelper';
import genreService from '../service/genre.service';
import { Book } from '../entity/Book';
import {body, validationResult} from 'express-validator'
import asyncHandler from 'express-async-handler';
import { plainToInstance } from 'class-transformer';
import { UpdateBookDto } from '../DTO/book/updateBook';
import { BookInstance } from '../entity/BookInstance';


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
    static getUpdate = async(req: Request, res: Response) => {
        try {
            const { id } = req.params;
            if (!id) {
                sendFlashMessage(req, 'error', 'mess.select.error');
            }
            const bookDetail = await bookService.getBookById(parseInt(id))
            const genres = await genreService.list()
            const authors = await authorService.list()
            const bookGenresId = bookDetail.bookGenres?.map(genre => genre.id)
            res.render('book/update', {
                genres,
                authors,
                bookInfo: bookDetail.bookInfo,
                bookAuthor: bookDetail.bookAuthor,
                bookGenres: bookDetail.bookGenres,
                bookGenresIds: bookGenresId
            })
        } catch (error) {
            res.redirect('/book');
        }
    }
    static update = async(req: Request, res: Response, next: NextFunction) => {
        const bookId = parseInt(req.params.id)
        try {
            const bookId = parseInt(req.params.id)
            const bookData = plainToInstance(UpdateBookDto, req.body)
            const authorId = bookData.author_id
            
            const bookResult = await bookService.getBookById(bookId);
            const book = bookResult.book;
            if (!book) {
                sendFlashMessage(req, 'error', 'mess_book.update.error')
                return res.redirect('/book')
            }

            const author = await authorService.authorById(authorId)
            if (!author) {
                sendFlashMessage(req, 'error', 'mess_book.update.error')
                return res.redirect('/book')
            }

            const genres = await genreService.listGenreById(bookData.genres)
            if (!genres) {
                sendFlashMessage(req, 'error', 'mess_book.update.error')
                return res.redirect('/book')
            }

            bookService.update(bookData, book, author, genres) 
            res.redirect(`../../book/${bookId}`)
        } catch (error) {
            sendFlashMessage(req,'error', 'mess_book.update.error')
            res.redirect(`/`)
        }
    }

    static delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const bookDetail = bookService.getBookById(parseInt(id));
            const bookInstances= (await bookDetail).bookInstances
            if(bookInstances && bookInstances?.length > 0 ) {
                sendFlashMessage(req, 'error', 'mess_book.delete.error');
                return res.redirect(`../../book/${id}`);
            }
            await bookService.delete(parseInt(id));
            sendFlashMessage(req, 'success', 'mess_book.delete.success');
            res.redirect('/book'); // or any other response
        } catch (error) {
            sendFlashMessage(req, 'error', 'mess_book.delete.error');
            res.redirect('/book');
        }
    };

    
}

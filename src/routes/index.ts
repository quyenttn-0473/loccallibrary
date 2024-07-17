// routes/index.ts
import { Router, NextFunction, Request, Response } from 'express';
import { title } from 'process';
const router: Router = Router();
import usersRouter from './users';
import authorRouter from './authorRouter';
import bookRouter from './bookRouter';
import genreRouter from './genreRouter';
import bookInstanceRouter from './bookInstanceRouter';
import { AllController } from '../controller/allController';
/* GET home page. */
router.get('/', AllController.counts);
router.use('/users', usersRouter);
router.use('/author', authorRouter);
router.use('/book', bookRouter);
router.use('/genre', genreRouter);
router.use('/book-instance', bookInstanceRouter);
export default router;

import { body } from 'express-validator';
import { Router, NextFunction, Request, Response } from 'express';
import validateRequest from '../middleware/validate-request.middleware';

import { BookController } from '../controller/bookController';
import { UpdateBookDto } from '../DTO/book/updateBook';

const router = Router();
router.get('/', BookController.list);
router.get('/create', BookController.create);
router.post('/', BookController.create);
router.get('/:id', BookController.detail);
router.get('/update/:id', BookController.getUpdate);
router.put('/update/:id', validateRequest(UpdateBookDto, 'genres'), BookController.update);
router.delete('/delete/:id', BookController.delete);
export default router;

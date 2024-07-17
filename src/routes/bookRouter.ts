import { Router, NextFunction, Request, Response } from 'express';

import { BookController } from '../controller/bookController';

const router = Router();
router.get('/', BookController.list);
router.get('/:id', BookController.detail);
router.post('/', BookController.create);
router.put('/update/:id', BookController.update);
router.delete('/delete/:id', BookController.delete);
export default router;

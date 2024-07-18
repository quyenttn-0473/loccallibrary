import { AuthorController } from '../controller/authorController';
import { Router, NextFunction, Request, Response } from 'express';

const router = Router();

router.get('/', AuthorController.list);
router.get('/:id', AuthorController.detail);
router.get('/create', AuthorController.create);
router.post('/', AuthorController.create);
router.put('/update/:id', AuthorController.update);
router.delete('/delete/:id', AuthorController.delete);

export default router;

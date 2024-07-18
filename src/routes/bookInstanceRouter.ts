import { Router, NextFunction, Request, Response } from 'express';

import { BookInstanceController } from '../controller/bookInstanceController';

const router = Router();

router.get('/', BookInstanceController.list);
router.get('/:id', BookInstanceController.detail);
router.get('/create', BookInstanceController.create);
router.post('/', BookInstanceController.create);
router.put('/update/:id', BookInstanceController.update);
router.delete('/delete/:id', BookInstanceController.delete);
export default router;

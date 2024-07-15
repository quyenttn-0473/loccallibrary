import { Router } from 'express';
import { BookController } from '../controller/bookController';

const router = Router();

router.get('/', BookController.list);
router.get('/:id', BookController.detail); // Thêm route cho chi tiết

export default router;

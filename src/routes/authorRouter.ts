import { Router } from 'express';
import { AuthorController } from '../controller/authorController';

const router = Router();

router.get('/', AuthorController.list);
router.get('/:id', AuthorController.detail); // Thêm route cho chi tiết
router.post('/', AuthorController.create);
router.put('/update/:id', AuthorController.update);
router.delete('/delete/:id', AuthorController.delete);

export default router;

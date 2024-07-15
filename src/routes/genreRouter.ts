import { Router } from 'express';
import { GenreController } from './../controller/genreController';

const router = Router();

router.get('/', GenreController.list);
router.get('/:id', GenreController.detail); // Thêm route cho chi tiết
router.post('/', GenreController.create);
router.put('/update/:id', GenreController.update);
router.delete('/delete/:id', GenreController.delete);
export default router;

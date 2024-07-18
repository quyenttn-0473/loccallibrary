import { Router } from 'express';
import { GenreController } from './../controller/genreController';
import validateRequest from '../middleware/validate-request.middleware';
import { CreateGenreDto } from '../DTO/genre/createGenre';

const router = Router();

router.get('/', GenreController.list);
router.get('/create', GenreController.getPageCreate);
router.post('/create', validateRequest(CreateGenreDto), GenreController.create);
router.get('/:id', GenreController.detail);
router.put('/update/:id', GenreController.update);
router.delete('/delete/:id', GenreController.delete);
export default router;

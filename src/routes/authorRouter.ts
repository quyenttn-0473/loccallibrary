import { AuthorController } from '../controller/authorController';
import { Router, NextFunction, Request, Response } from 'express';
import validateRequest from '../middleware/validate-request.middleware';
import { CreateAuthorDto } from '../DTO/author/createAuthor';

const router = Router();

router.get('/', AuthorController.list);
router.get('/create', AuthorController.getCreate);
router.post('/create', validateRequest(CreateAuthorDto), AuthorController.create);
router.get('/:id', AuthorController.detail);
router.put('/update/:id', AuthorController.update);
router.get('/delete/:id', AuthorController.getDelete);
router.delete('/delete/:id', AuthorController.delete);

export default router;

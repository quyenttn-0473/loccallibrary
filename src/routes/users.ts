// routes/users.ts
import { Router, NextFunction, Request, Response } from 'express';
import { title } from 'process';
const router: Router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', { content: 'Hom nay hoan thanh part 1', name: 'Ngoc Quyen', title: 'Express' });
});
export default router;

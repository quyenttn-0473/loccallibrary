// routes/index.ts
import { Router, NextFunction, Request, Response } from 'express';
import { title } from 'process';
const router: Router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', { title: 'Ngay 12/7', name: 'Ngoc Quyen' });
});
export default router;

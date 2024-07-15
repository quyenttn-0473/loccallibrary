import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import http from 'http';
import dotenv from 'dotenv';
import { Request, Response, NextFunction, Router } from 'express';

dotenv.config();

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import authorRouter from './routes/authorRouter';
import bookRouter from './routes/bookRouter';
import methodOverride from 'method-override';
import { AppDataSource } from './data-source';
const app = express();
const server = http.createServer(app);

AppDataSource.initialize().then(async () => {
    console.log('Data source was initialize');
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    // Sử dụng method-override để xử lý yêu cầu PUT và DELETE
    app.use(methodOverride('_method'));

    // Chuyen trang
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/author', authorRouter);
    app.use('/book', bookRouter);

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(500); // err.status
        res.render('error');
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

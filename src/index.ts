import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import http from 'http';
import dotenv from 'dotenv';
import { Request, Response, NextFunction, Router } from 'express';
import i18nextMiddleware from 'i18next-http-middleware';
import i18next from './i18n';
import session from 'express-session';
import flash from 'connect-flash';
dotenv.config();

import indexRouter from './routes/index';
import methodOverride from 'method-override';
import { AppDataSource } from './data-source';
const app = express();
const server = http.createServer(app);

AppDataSource.initialize().then(async () => {
    console.log('Data source was initialize');
    // Initialize i18next middleware
    app.use(i18nextMiddleware.handle(i18next));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(methodOverride('_method'));
    // Cấu hình session middleware
    app.use(
        session({
            secret: process.env.SECRETKEY || '',
            resave: false,
            saveUninitialized: true,
        })
    );
    app.use(flash());
    // Middleware để chuyển flash messages vào views
    app.use((req, res, next) => {
        res.locals.successMessages = req.flash('success');
        res.locals.errorMessages = req.flash('error');
        next();
    });
    // Chuyen trang
    app.use('/', indexRouter);

    // Sử dụng errorHandler ở cuối cùng
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(500); // err.status
            res.render('error');
        });
        // render the error page
        res.status(500); // err.status
        res.render('error');
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

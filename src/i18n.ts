import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';
import { join } from 'path';

i18next
    .use(Backend)
    .use(middleware.LanguageDetector)
    .init({
        backend: {
            loadPath: join(__dirname, '../src/locales/{{lng}}/{{ns}}.json'),
        },
        fallbackLng: 'en',
        preload: ['en', 'vi'],
        saveMissing: true,
        detection: {
            order: ['querystring', 'cookie', 'header'],
            caches: ['cookie'],
        },
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;

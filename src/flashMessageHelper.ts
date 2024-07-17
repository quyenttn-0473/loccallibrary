import { Request } from 'express';
import i18next from 'i18next';

export const sendFlashMessage = (req: Request, type: 'success' | 'error', key: string, options?: any) => {
    const message = i18next.t(key, options);
    req.flash(type, message.toString());
};

import passport from "passport";
import { NextFunction, Request, Response } from 'express';

export default (request: Request, response: Response, next: NextFunction) => {
    return passport.authenticate('jwt', { session: false })(request, response, next);
}
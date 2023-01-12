import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/httpException';


export function notFound(request: Request, response: Response, next: NextFunction) {
	const err = new HttpException( 404, "Not found");
	next(err);
}

export function catchAsync(fn) {
	return (req, res, next) => {
		fn(req, res, next).catch(err => next(err));
	}
}

export function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
	console.error( `Error: ${error.message}`)
	const status = error.status || 500;
	const message = error.message || 'Something went wrong';

	return response.status(status).send(error.message);
}


import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/httpException';

export function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
	const status = error.status || 500;
	const message = error.message || 'Something went wrong';
	response.status(status).send({
		message,
		status
	});
}

export function notFound(request: Request, response: Response, next: NextFunction) {
	const err = new Error('404 page not found');
	response.status(404);
	next(err);
}

export function catchAsync(fn) {
	return (req, res, next) => {
		fn(req, res, next).catch(err => next(err));
	}
}
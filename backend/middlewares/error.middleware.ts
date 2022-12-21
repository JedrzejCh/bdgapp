import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/httpException';

export function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
	const status = error.status || 500;
	console.log(status)
	const message =  'Something went wrong';
	response.status(status).send({
		message,
		status
	});
	next(error);
}

// export function notFound(request: Request, response: Response, next: NextFunction) {
// 	const err = new HttpException(404, 'Page not found');
// 	err.status = 404;

// 	// response.redirect('/')
// 	// err.status
// 	next(err);
// }

// export function catchErrors(err, response, request, next) {
// 	response.status(err.status || 500);
	
// 	// response.render('error', {
// 	// 	// tutaj widok strony błedu
// 	// })
// }

export function catchAsync(fn) {
	return (req, res, next) => {
		fn(req, res, next).catch(err => next(err));
	}
}
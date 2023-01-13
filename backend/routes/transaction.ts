import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import { Logger } from "../logger/logger";
import transactionsController from '../controllers/transactionsController';
import { catchAsync } from '../middlewares/error.middleware';
import jwtAuth from "../middlewares/passport.middleware";

class TransactionsRoute {

    public express: Application;
    public logger: Logger;

    constructor() {
			this.express = express();
			this.middleware();
			this.routes();
    }

    private middleware(): void {
			this.express.use(bodyParser.json());
			this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
		this.express.get('/', jwtAuth, catchAsync(transactionsController.findAll));
		this.express.get('/:slug', catchAsync(transactionsController.findOne));
		this.express.post('/:slug', jwtAuth, catchAsync(transactionsController.create));
		this.express.put('/:slug', catchAsync(transactionsController.update));
		this.express.delete('/:slug', catchAsync(transactionsController.remove));
    }
}

export default new TransactionsRoute().express;
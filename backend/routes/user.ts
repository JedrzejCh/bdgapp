import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import { Logger } from "../logger/logger";
import usersController from '../controllers/usersController';
import { catchAsync } from '../middlewares/error.middleware';

class UsersRoute {

    public express: Application;
    public logger: Logger;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.get('/', catchAsync(usersController.findAll));
        this.express.get('/:slug', catchAsync(usersController.findOne));
        this.express.post('/', catchAsync(usersController.create));
        this.express.put('/:id', usersController.update);
        this.express.delete('/:id', usersController.remove)
    }
}

export default new UsersRoute().express;
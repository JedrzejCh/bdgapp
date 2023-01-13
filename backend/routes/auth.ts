import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import { Logger } from "../logger/logger";
import authController from "../controllers/authController";
import { catchAsync } from '../middlewares/error.middleware';
import passport from "passport"

class AuthRoute {

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
        this.express.post('/login', passport.authenticate('local', { session: false }), catchAsync(authController.login));
        this.express.post('/register', catchAsync(authController.register));
    }
}

export default new AuthRoute().express;
import express, { Application } from "express";
import bodyParser from "body-parser";
import { Logger } from "../logger/logger";
import UsersRoute from "./user";
import TransactionsRoute from "./transaction";
import AuthRoute from "./auth"

class Routes {

    public express: Application;
    public logger: Logger;

    constructor() {
        this.express = express();
        this.middleware();
        this.initRoutes();
        this.logger = new Logger();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    public initRoutes(): void {
        this.express.use("/users", UsersRoute);
        this.express.use("/transactions", TransactionsRoute);
        this.express.use("/auth", AuthRoute);
    }
}

export default new Routes().express;
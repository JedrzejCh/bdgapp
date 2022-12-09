import express, { Application } from "express";
import bodyParser from "body-parser";
import { Logger } from "./logger/logger";
import {errorMiddleware, notFound} from './middlewares/error.middleware';
import { MoongoseHandler } from "./database/moongose";
import Routes from "./routes/routes";


class App {
    public express: Application;
    public logger: Logger;
    private db = new MoongoseHandler();

    constructor() {
        this.express = express();
        this.routes();
        this.initMiddleware();
        this.initErrorHandler();
        this.logger = new Logger();
    }

    private initMiddleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(express.static(process.cwd() + "/backend/dist/"));
    }

    private initErrorHandler() {
		this.express.use(errorMiddleware);
        // this.express.use(notFound);
	}

    private routes() {
        this.express.use("/api", Routes);
    }
}

export default App;
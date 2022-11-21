import express, { Application } from "express";
import bodyParser from "body-parser";
import { Logger } from "./logger/logger";
import Routes from "./routes/routes";
import errorMiddleware from './middlewares/error.middleware';
import { MoongoseHandler } from "./database/moongose";


class App {
    public app: Application;
    public logger: Logger;
    private db = new MoongoseHandler()
    constructor() {
        this.app = express();
        this.initMiddleware();
        this.initErrorHandler();
        this.logger = new Logger();
    }


    private initMiddleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(process.cwd() + "/backend/dist/"));
    }

    private initErrorHandler() {
		this.app.use(errorMiddleware);
	}
}

export default App;
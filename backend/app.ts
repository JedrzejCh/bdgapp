import express, { Application } from "express";
import bodyParser from "body-parser";
import { Logger } from "./logger/logger";
import { MoongoseHandler } from "./database/moongose";
import Routes from "./routes/routes";
import { errorMiddleware, notFound } from "./middlewares/error.middleware";
import passport from "./utils/passport";
import * as dotenv from "dotenv";

dotenv.config();

class App {
    public express: Application;
    public logger: Logger;
    private db = new MoongoseHandler();

    constructor() {
			this.express = express();
			this.onAppInit();
			this.initMiddleware();
			this.routes();
			this.logger = new Logger();
			this.initErrorHandler();
    }

    private initMiddleware(): void {
			this.express.use(bodyParser.urlencoded({extended: true}));
			this.express.use(bodyParser.json());
			this.express.use(express.static(process.cwd() + "/backend/dist/"));
			passport();
    }

    private initErrorHandler() {
		this.express.use(errorMiddleware);
		this.express.use(notFound);
	}

	private onAppInit() {
		this.express.get('/', (req, res) => {
			res.send("Application is up");
		})
	}

    private routes() {
			this.express.use("/api", Routes);
    }
}

export default App;
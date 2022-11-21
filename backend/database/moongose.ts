import { mongoURL } from "../config";
import { Logger } from "../logger/logger";
const mongoose = require("mongoose");

export class MoongoseHandler {

	private logger = new Logger();

    constructor() {
			this.createConnection();
		}

    public async createConnection(): Promise<void> {
			try {
				 mongoose.connect(mongoURL,
					{
						useNewUrlParser: true,
						useUnifiedTopology: true,
					}
				)
					this.logger.info(`Connected to MongoDB: ${mongoURL}`);
			} catch(err: any) {
				this.logger.error(err);
			}
    }
}
import { Logger } from "../logger/logger";
import * as dotenv from 'dotenv';
const mongoose = require("mongoose");


dotenv.config();
export class MoongoseHandler {

	private logger = new Logger();

    constructor() {
			this.createConnection();
		}

    public async createConnection(): Promise<void> {

			try {
				await mongoose.connect(process.env.DATABASE,
					{
						useNewUrlParser: true,
						useUnifiedTopology: true,
					}
				)
				this.logger.info(`Connected to MongoDB`);
			} catch(err: any) {
				this.logger.error(err);
				process.exit(1);
			}
    }

}

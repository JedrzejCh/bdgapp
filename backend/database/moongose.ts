import { Logger } from "../logger/logger";
import Transaction from "./models/Transaction";
import User from "./models/User";
import * as dotenv from 'dotenv';
const mongoose = require("mongoose");


dotenv.config();
export class MoongoseHandler {

	private logger = new Logger();

    constructor() {
			this.createConnection();
			this.createUser();
			// this.createTransaction();
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

		private async createUser(): Promise<void> {
			const newUser1 = new User({
				name: 'test',
				email: 'test@test2.pl',
				password: 'chuj321',
				balance: 2137
			})

			await newUser1.save();
		}

		private async createTransaction(): Promise<void> {
			const newTransaction1 = new Transaction({
				value: 133,
				income: true,
				extenditure: false,
				date: '2022-07-23T22:00:00.000+00:00',
				// userID: 
			})

			await newTransaction1.save();
		}


}

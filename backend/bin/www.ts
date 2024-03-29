import { Application } from 'express';
import http, { Server } from 'http';
import App from "../app";
import { Logger } from "../logger/logger";

const application = new App();
const app = application.express;

class WWWServer {

  private app: Application;
	private server: Server;
	private port: number;
  private logger = new Logger();

    // tslint:disable-next-line: no-shadowed-variable
    constructor(app: Application) {
		this.app = app;
		this.port = this.normalizePort(process.env.PORT || '3080');

		this.initServer();
		this.app.set('port', this.port);
		this.server.listen(this.port);
		this.addListenersToServer();
    }

	private initServer() {
		this.server = http.createServer(this.app)
	}

	private addListenersToServer() {
		this.server.on('listening', () => this.onServerListening());
		this.server.on('error', () => this.onServerError.bind(this));
	}

	private onServerListening() {
		try{
			const addr = this.server.address();
			const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
			this.logger.info(`Server is listening on ${bind}`);
		} catch(err: any) {
			this.logger.error(err.message)
		}
	}

	private onServerError(error: any) {
		if (error.syscall !== 'listen') {
			throw error;
		}

		const bind = typeof this.port === 'string' ? `pipe ${this.port}` : `Port ${this.port}`;
		this.logger.error(bind)
		throw error;
	}

    private normalizePort(val: any) {
		const portValue = parseInt(val, 10);
		if (Number.isNaN(portValue)) {
			return val;
		}
		if (portValue >= 0) {
			return portValue;
		}
		return false;
	}
}

// tslint:disable-next-line: no-unused-expression
new WWWServer(app);
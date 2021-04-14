"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor(port, controllers) {
        this.port = port;
        this.app = express();
        this.initializeMiddlewares();
        this.mountRoutes();
        this.initializeControllers(controllers);
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            });
        });
        router.get('/testing', (req, res) => {
            res.json({
                message: 'Hellasdo World!'
            });
        });
        this.app.use('/', router);
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            console.log(`${controller.router} test`);
            this.app.use('/', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map
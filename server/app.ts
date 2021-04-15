import * as express from 'express';
import * as bodyParser from 'body-parser';
import path = require('path');

class App {
  public app: express.Application;

  constructor(public port: any, controllers) {
    this.app = express();
    this.initializeMiddlewares();
    this.mountRoutes();
    this.initializeControllers(controllers);
    this.app.use(express.static(path.join(__dirname, 'dist')));
    this.app.use(express.static('public'));
    //this.app.use('dist');
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private mountRoutes (): void {    
    const router = express.Router();        
    router.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
      //res.json({
      //  message: 'Hello World!'
      //});
    });
    //this.app.use('/', router);
  }

  private initializeControllers(controllers) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
        console.log(`App listening on the port ${this.port}`);
      });
  }
}

export default App;
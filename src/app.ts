import swaggerUi from 'swagger-ui-express';
import express from 'express';
import swaggerDocument from '../swagger.json';
import 'express-async-errors';
import scheduleRouter from './routes/scheduleRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.app.use('/schedule', scheduleRouter);

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;

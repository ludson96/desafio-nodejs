import 'express-async-errors';
import express from 'express';
import scheduleRouter from './routes/scheduleRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.app.use('/schedule', scheduleRouter);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;

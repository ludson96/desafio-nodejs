import Index from './index';
import 'dotenv/config';

const PORT = process.env.API_PORT || 3001;

new Index().start(PORT);

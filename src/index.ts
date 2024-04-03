import express from 'express';
import database from './'
// import { productsRouter, salesRotuer } from './routers';

const index = express();
index.use(express.json());


// index.use('/products', productsRouter);

// index.use('/sales', salesRotuer);

export default index;
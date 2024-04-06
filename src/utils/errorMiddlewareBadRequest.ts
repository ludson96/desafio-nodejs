import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const errorMiddleware: ErrorRequestHandler = (error, _req, res) =>
  res.status(StatusCodes.BAD_REQUEST).json({ error });

export default errorMiddleware;

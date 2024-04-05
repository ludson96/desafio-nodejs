import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpError from '../utils/HttpError';

export default class ValidateId {
  public static idFields = (req: Request, _res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Verifica se o id é um número, caso não seja retorna um erro personalizado
    if (Number.isNaN(Number(id))) {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'ID must be a number');
    }

    next();
  };
}

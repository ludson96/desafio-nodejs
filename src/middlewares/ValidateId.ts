import { Request, Response, NextFunction } from 'express';
import errorMiddlewareBadRequest from '../utils/errorMiddlewareBadRequest';

export default class ValidateId {
  public static idFields = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Verifica se o id é um número, caso não seja retorna um erro personalizado
    if (Number.isNaN(Number(id))) {
      return errorMiddlewareBadRequest('ID must be a number', req, res, next);
    }

    next();
  };
}

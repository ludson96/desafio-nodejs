import { Request, Response, NextFunction } from 'express';
import errorMiddlewareBadRequest from '../utils/errorMiddlewareBadRequest';
import { IScheduleInput } from '../interfaces/ISchedule';
import validateEmail from '../utils/validateEmail';

export default class ValidateInputEmail {
  public static emailFields = (req: Request, res: Response, next: NextFunction) => {
    const { email }: IScheduleInput = req.body;

    if (!email) {
      return errorMiddlewareBadRequest('Email is required', req, res, next);
    }

    if (!email.trim()) {
      return errorMiddlewareBadRequest('Email cannot be an empty string', req, res, next);
    }

    if (!validateEmail(email)) {
      return errorMiddlewareBadRequest('Invalid email format', req, res, next);
    }

    next();
  };
}

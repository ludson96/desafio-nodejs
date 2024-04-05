import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpError from '../utils/HttpError';
import { IScheduleInput } from '../interfaces/ISchedule';
import validateEmail from '../utils/validateEmail';

export default class ValidateInputEmail {
  public static emailFields = (req: Request, _res: Response, next: NextFunction) => {
    const { email }: IScheduleInput = req.body;

    if (!email) {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'Email is required');
    }

    if (!email.trim()) {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'Email cannot be an empty string');
    }

    if (!validateEmail(email)) {
      throw new HttpError(StatusCodes.BAD_REQUEST, 'Invalid email format');
    }

    next();
  };
}

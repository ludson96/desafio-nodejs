import { Router } from 'express';
import ScheduleController from '../controllers/ScheduleController';
import ScheduleService from '../services/ScheduleService';
import ValidateInputEmail from '../middlewares/ValidateInputEmail';
import ValidateId from '../middlewares/ValidateId';
import ScheduleModel from '../models/ScheduleModel';

const router = Router();

const scheduleService = new ScheduleService(ScheduleModel);
// Passando a instância de ScheduleService para ScheduleController
const scheduleController = new ScheduleController(scheduleService);

router.route('/')
  .get(scheduleController.getAllSchedule)
  .post(ValidateInputEmail.emailFields, scheduleController.createSchedule);

router.delete('/:id', ValidateId.idFields, scheduleController.deleteSchedule);

export default router;

import { Router } from 'express';
import ScheduleController from '../controllers/ScheduleController';
import ValidateInputEmail from '../middlewares/ValidateInputEmail';
import ValidateId from '../middlewares/ValidateId';

const router = Router();

const scheduleController = new ScheduleController();

router.get('/', scheduleController.getAllSchedule);

router.post('/', ValidateInputEmail.emailFields, scheduleController.createSchedule);

router.delete('/:id', ValidateId.idFields, scheduleController.deleteSchedule);

export default router;

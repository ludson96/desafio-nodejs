import { Router } from 'express';
import ScheduleController from '../controllers/ScheduleController';
import ValidateInputEmail from '../middlewares/ValidateInputEmail';

const router = Router();

const scheduleController = new ScheduleController();

router.get('/', scheduleController.getAllSchedule);

router.post('/', ValidateInputEmail.emailFields, scheduleController.createSchedule);

router.delete('/:id', scheduleController.deleteSchedule);

export default router;

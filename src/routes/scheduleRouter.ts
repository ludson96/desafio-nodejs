import { Router } from 'express';
import ScheduleController from '../controllers/ScheduleController';

const router = Router();

const scheduleController = new ScheduleController();

router.get('/', scheduleController.getAllSchedule);

export default router;

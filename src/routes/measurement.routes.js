import { Router } from 'express';
import { measurementsController } from '../controllers';

const router = Router();

router.post('/', measurementsController.createMeasurement);
router.get('/', measurementsController.getMeasurements);
router.get('/:id', measurementsController.getMeasurementById);
router.put('/:id', measurementsController.updateMeasurementById);
router.delete('/:id', measurementsController.deleteMeasurementById);

export default router;
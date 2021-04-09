import { Router } from 'express';
import { districtsController } from '../controllers';

const router = Router();

router.post('/', districtsController.createDistrict);
router.get('/', districtsController.getDistricts);
router.get('/:id', districtsController.getDistrictById);
router.put('/:id', districtsController.updateDistrictById);
router.delete('/:id', districtsController.deleteDistrictById);

export default router;
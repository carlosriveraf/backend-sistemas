import { Router } from 'express';
import districtRoutes from './district.routes';
import measurementRoutes from './measurement.routes';
import userRoutes from './user.routes';
import variableRoutes from './variable.routes';
import zoneRoutes from './zone.routes';

const router = Router();

router.use('/api/districts', districtRoutes);
router.use('/api/measurements', measurementRoutes);
router.use('/api/users', userRoutes);
router.use('/api/variables', variableRoutes);
router.use('/api/zones', zoneRoutes);

export default router;
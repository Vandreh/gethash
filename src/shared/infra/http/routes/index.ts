import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { photosRoutes } from './photos.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use("/photos", photosRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
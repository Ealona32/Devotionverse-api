import { Router } from 'express';
import * as controller from '../controllers/devotion.controller';

const router = Router();

router.get('/devotions', controller.getAll);
router.get('/devotions/:id', controller.getById);
router.post('/devotions', controller.create);
router.put('/devotions/:id', controller.update);
router.delete('/devotions/:id', controller.remove);

export default router;
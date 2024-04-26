import  express from 'express';
import AddonController from '../controllers/AddonController.js';

const router = express.Router();

router.post('/', AddonController.create);
router.post('/:addon_code', AddonController.update);
router.get('/', AddonController.getAll);
router.get('/:addon_code', AddonController.findById);
router.delete('/delete/:id', AddonController.delete);

export default router;

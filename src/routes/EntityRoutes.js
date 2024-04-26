import  express from 'express';
import EntityController from '../controllers/EntityController.js';

const router = express.Router();

router.post('/', EntityController.create);
router.post('/:entity_code', EntityController.update);
router.get('/', EntityController.getAll);
router.get('/:entity_code', EntityController.findById);
router.delete('/delete/:id', EntityController.delete);

export default router;

import  express from 'express';
import StaxController from '../controllers/StaxController.js';

const router = express.Router();

router.post('/', StaxController.create);
router.post('/:stax_code', StaxController.update);
router.get('/', StaxController.getAll);
router.get('/:stax_code', StaxController.findById);
router.delete('/delete/:id', StaxController.delete);

export default router;

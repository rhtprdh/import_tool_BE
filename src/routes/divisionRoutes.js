import  express from 'express';

import DivController from "../controllers/DivController.js"
const router = express.Router();

router.post('/', DivController.create);
router.post('/:div_code', DivController.update);
router.get('/', DivController.getAll);
router.get('/:div_code', DivController.findById);
router.delete('/delete/:id', DivController.delete);

export default router;

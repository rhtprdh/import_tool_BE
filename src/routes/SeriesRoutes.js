import  express from 'express';
import SeriesController from '../controllers/SeriesController.js';

const router = express.Router();

router.post('/', SeriesController.create);
router.post('/:series_code', SeriesController.update);
router.get('/', SeriesController.getAll);
router.get('/:series_code', SeriesController.findById);
router.delete('/delete/:id', SeriesController.delete);
export default router;

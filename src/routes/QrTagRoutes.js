import  express from 'express';
import QrTagController from '../controllers/QrTagController.js';

const QRTagRoutes = express.Router();

QRTagRoutes.post('/', QrTagController.create);
QRTagRoutes.post('/:batchno_ref', QrTagController.update);
QRTagRoutes.get('/', QrTagController.getAll);
QRTagRoutes.get('/:batchno_ref', QrTagController.findById);

export default QRTagRoutes;

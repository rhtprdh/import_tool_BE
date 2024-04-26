import  express from 'express';
import WeighmentDAta from '../WeighmentDAta/WeightmentData.js';

const QrTagWeightRoutes = express.Router();


// QrTagWeightRoutes.get('/getSerialData', WeightmentData.serialData);
QrTagWeightRoutes.get('/getSerialData', WeighmentDAta);

export default QrTagWeightRoutes;

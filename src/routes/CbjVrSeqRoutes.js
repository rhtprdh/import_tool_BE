import express from "express";
import CbjVrSeqController from "../controllers/CbjVrSeqController.js";


const router = express.Router();

router.post('/', CbjVrSeqController.create);
router.post('/:id', CbjVrSeqController.update);
router.post('/m/:id', CbjVrSeqController.updateMaster);
router.get('/', CbjVrSeqController.getAll);
router.get('/:id', CbjVrSeqController.findById);
router.get('/seq/:id', CbjVrSeqController.findByIdTwo);
router.get('/token/daybook/:id', CbjVrSeqController.findByIdTokenDayBook);
router.delete('/delete/:id', CbjVrSeqController.delete);
router.delete('/delete/all/data', CbjVrSeqController.deleteAll);


export default router;

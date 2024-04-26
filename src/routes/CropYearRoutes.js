import express from "express";
import CropYearController from "../controllers/CropYearController.js";


const router = express.Router();

router.post('/', CropYearController.create);
router.post('/:id', CropYearController.update);
router.get('/', CropYearController.getAll);
router.get('/:id', CropYearController.findById);

export default router;

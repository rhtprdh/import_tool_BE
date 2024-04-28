// require('dotenv').config()
import 'dotenv/config'
// const express = require('express')
import express from 'express'
// import { Client } from 'pg';
import mysql from 'mysql'
import mongoose from 'mongoose'
import routes from './src/routes/divisionRoutes.js'
import ConnectDB from './src/db/ConnnectDB.js'
import CropYearRoutes from './src/routes/CropYearRoutes.js'
import QRTagRoutes from './src/routes/QrTagRoutes.js'
// import QrTagWeightRoutes from './src/routes/QrTagWeightRoutes.js'
// import WeighmentData from './src/WeighmentDAta/WeightmentData.js'
import CbjVrSeqRoutes from './src/routes/CbjVrSeqRoutes.js'
import EntityRoutes from './src/routes/EntityRoutes.js'
import AddonRoutes from './src/routes/AddonRoutes.js'
import SeriesRoutes from './src/routes/SeriesRoutes.js';
import StaxRoutes from './src/routes/StaxRoutes.js';

const app = express()
// const router = Router()
app.use(express.json());
app.use('/api/division', routes); 
app.use('/api/qrtag', QRTagRoutes); 
app.use('/api/crop-year', CropYearRoutes);
// app.use('/api/qrtag/weight', QrTagWeightRoutes)
// app.use('/api/weight', WeighmentData);
app.use('/api/vrseq', CbjVrSeqRoutes );
app.use('/api/entity', EntityRoutes);
app.use('/api/addon', AddonRoutes);
app.use('/api/series', SeriesRoutes);
app.use('/api/stax', StaxRoutes);

app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`)
      })
     
      // const generateQRCode = (qr_data) => {
      //   const base64QRCode = QRCode.toDataURL(qr_data, {
      //   type: 'image/png',
      //   quietZone: 0,
      //   version: 4,
      //   });
      //   return base64QRCode;
      //   };
      //   console.log(generateQRCode('this is qr code'))

     
        
        
        
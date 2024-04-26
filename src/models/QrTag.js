import ConnectionDB from "../db/ConnnectDB.js"
import QRCode from 'qrcode'

class QrTag {
  constructor(QrTag) {
    this.div_code = QrTag.div_code;
    this.entity_code = QrTag.entity_code;
    this.batchno =QrTag.batchno;
    this.batch_qty =QrTag.batch_qty;
  }
}
function generateQRCode1(qr_data) {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(qr_data, {
      type: 'image/png',
      quietZone: 0,
      version: 4,
    }, (err, base64QRCode) => {
      if (err) {
        reject(err);
      } else {
        resolve(base64QRCode);
      }
    });
  });
}

  

QrTag.create = function (qrTagAdd, result) {
  
 

  const dataToInsert = [];
  for(var batch =0; batch< qrTagAdd.length; batch++){
  for (var qty = 1; qty <= qrTagAdd[batch].batch_qty; qty++) {

  dataToInsert.push({
            div_code:qrTagAdd[batch].div_code ,
            entity_code: qrTagAdd[batch].entity_code,
            slno:qty,
            batchno_ref: `${qrTagAdd[batch].batchno+'-'+qty.toString().padStart(3, '0') }`,
            batchno: qrTagAdd[batch].batchno,
            // batch_qty: batchData[batch].qty,
          //  qr_file:getgenerateQRCode(`${batchData[0].batch+'-'+qty.toString().padStart(3,'0') }`)
          //  qr_file:generateQRCode1(`${qrTagAdd[batch].batchno+'-'+qty.toString().padStart(3, '0') }`)

  });
}
  }


  const values = dataToInsert.map(row => {
    return [row.div_code, row.entity_code, row.batchno, row.slno, row.batchno_ref];
  });

const qry = 'INSERT INTO qrtag_batch (div_code, entity_code, batchno, slno,batchno_ref) VALUES ?';
  ConnectionDB.query(qry, [values], (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    //  QrTag.genrateQrFile(dataToInsert)
    result('data save successfull', );
  });
};
// QrTag.genrateQrFile = async function(fileData){
//   const qrFileToInsert = [];
//   for(var totalRowLength =0; totalRowLength< fileData.length; totalRowLength++){

//           qrFileToInsert.push({
//             batchno_ref:fileData[totalRowLength].batchno_ref ,
//            qr_file: await generateQRCode1(fileData[totalRowLength].batchno_ref)
//   });
//   }
//   QrTag.updateQRFile(qrFileToInsert)
//   return qrFileToInsert
// }

// QrTag.updateQRFile = async function (updateQrFile, result) {
 
    
//     const  qrFileValues =  updateQrFile.map(row => {
//     return  [row.qr_file, row.batchno_ref];
//   });

//   const updateSql ='update qrtag_batch set qr_file=? where batchno_ref =?'
//    ConnectionDB.query(updateSql, [qrFileValues], (err, res) => {
//     if (err) {
//       result(err, null);
//       return;
//     }

//     if (res.affectedRows === 0) {
//       result(new Error('No qr file were updated, please regenerate the batc'), null);
//       return;
//     }
//     result(null, res.affectedRows);
//   });
// };


QrTag.update = function (updateQrTag, result) {
  ConnectionDB.query('update qrtag_batch set ? where batchno_ref =?', [updateQrTag,updateQrTag.batchno_ref], (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result(new Error('No rows were updated'), null);
      return;
    }
    result(null, res.affectedRows);
  });
};

QrTag.getAll = function (result) {
  ConnectionDB
  .query('SELECT distinct batchno FROM qrtag_batch', (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, res);
  });
};

QrTag.findById = function (value, result) {
 
  
  ConnectionDB.query('select * from qrtag_batch where batchno = ?', value, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length === 0) {
      result(null, null);
      return; 
    }

    result(null, res);
  });
};

export default  QrTag

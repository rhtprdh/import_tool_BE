import ConnectionDB from "../db/ConnnectDB.js"

class CropYear {
  constructor(CropYearData) {
    this.id=  CropYearData.id;
    this.div_code = CropYearData.div_code;
    this.entity_code = CropYearData.entity_code;
    this.from_date = CropYearData.from_date;
    this.to_date = CropYearData.to_date;
    this.crop_year = CropYearData.crop_year;
  }
}

CropYear.create = function (newCrop, result) {
  ConnectionDB.query('insert into crop_year set ?', newCrop, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId });
  });
};

CropYear.update = function (updateCrop, result) {
  ConnectionDB.query('update crop_year set ? where id =?', [updateCrop,updateCrop.id], (err, res) => {
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

CropYear.getAll = function (result) {
  ConnectionDB
  .query('SELECT * FROM crop_year', (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, res);
  });
};

CropYear.findById = function (value, result) {
 
  
  ConnectionDB.query('select * from crop_year where id = ?', value, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length === 0) {
      result(null, null);
      return; 
    }

    result(null, new CropYear(res[0]));
  });
};

export default  CropYear

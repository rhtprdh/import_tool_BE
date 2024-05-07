import ConnectionDB from "../db/ConnnectDB.js"

class SeriesMast {
  constructor(SeriesMast) {
    this.series_code = SeriesMast.series_code;
    this.series_name = SeriesMast.series_name;
    this.entity_code = SeriesMast.entity_code;
    // this.entity_name = SeriesMast.entity_name;
    this.div_code = SeriesMast.div_code;
    // this.div_name = SeriesMast.div_name;
    this.post_code = SeriesMast.post_code;
    this.bankId = SeriesMast.bankId;
    this.tran_type= SeriesMast.tran_type;
    this.series_type= SeriesMast.series_type;
    this.state_code= SeriesMast.state_code;

   
  }
}

SeriesMast.create = function (newSeries, result) {
    newSeries.bankId= newSeries.series_code.charAt(newSeries.series_code.length - 1)+1      
  ConnectionDB.query('insert into series_mast set ?', newSeries, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId });
  });
};

SeriesMast.update = function (updateSeries, result) {
  ConnectionDB.query('update series_mast set ? where series_code =?', [updateSeries,updateSeries.series_code], (err, res) => {
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

SeriesMast.getAll = function (filters,result) {
  let sql = `SELECT s.series_code, s.series_name, s.entity_code, e.entity_name, s.div_code,d.div_name, s.post_code, s.bankId, s.tran_type, s.series_type,s.state_code FROM qrtag.series_mast s JOIN qrtag.entity_mast e ON s.entity_code = e.entity_code JOIN qrtag.div_mast d ON s.div_code = d.div_code`;
  // const values = [slugValue];
  const values = [];

  if (Object.keys(filters).length > 0) {

   
    const filterConditions = Object.keys(filters)
    .filter(key => key !== 'series_code')
    .map(key => `s.${key} = ?`);
    if (filterConditions.length > 0) {
      sql += ` where `;
    sql += filterConditions.join(' AND ');
    values.push(...Object.values(filters).filter(value => value !==filters.series_code));
  }
}
  ConnectionDB.query(sql, values, (err, res) => {
    console.log(sql);
    console.log(values);
    if (err) {
      console.error('Error executing SQL query:', err);
      // res.status(500).json({ error: 'Internal server error' });
      result(err, null);
      return;
    }
    result(null, res);
  });

  // ConnectionDB.query('SELECT s.series_code, s.series_name, s.entity_code, e.entity_name, s.div_code,d.div_name, s.post_code, s.bankId FROM qrtag.series_mast s JOIN qrtag.entity_mast e ON s.entity_code = e.entity_code JOIN qrtag.div_mast d ON s.div_code = d.div_code', (err, res) => {
  //   if (err) {
  //     result(err, null);
  //     return;
  //   }

    
  //   result(null, res);
  // });
};

SeriesMast.findById = function (value, result) {
 
  
  ConnectionDB.query('SELECT s.series_code, s.series_name, s.entity_code, e.entity_name, s.div_code,d.div_name, s.post_code, s.bankId, s.tran_type, s.series_type, s.state_code FROM qrtag.series_mast s JOIN qrtag.entity_mast e ON s.entity_code = e.entity_code JOIN qrtag.div_mast d ON s.div_code = d.div_code where series_code = ?', value, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length === 0) {
      result(null, null);
      return; 
    }

    result(null, res[0]);
  });
};

SeriesMast.delete = function (value, result) {
  // const vrSeqArray = deleteId;

  
// const placeholders = vrSeqArray.map(() => '?').join(',');

// const sql = `DELETE FROM vr_seq WHERE vrSeq IN (${placeholders})`;
const sql = `DELETE FROM  qrtag.series_mast where series_code IN ('${value}')`;

// Execute the delete query with the array of vrSeq values
ConnectionDB.query(sql, value, (err, res) => {
  if (err) {
    console.error('Error executing delete query:', err);
    // Handle error
  } else {
    console.log('Deleted rows:', res.affectedRows);
    // Handle successful deletion
  }
});

   
  };

export default  SeriesMast

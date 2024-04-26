import ConnectionDB from "../db/ConnnectDB.js"

class DivMast {
  constructor(divMast) {
    this.div_code = divMast.div_code;
    this.div_name = divMast.div_name;
    this.entity_code = divMast.entity_code;
    // this.entity_name = divMast.entity_name;
  }
}

DivMast.create = function (newDiv, result) {
  ConnectionDB.query('insert into div_mast set ?', newDiv, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId });
  });
};

DivMast.update = function (updateDiv, result) {
  ConnectionDB.query('update div_mast set ? where div_code =?', [updateDiv,updateDiv.div_code], (err, res) => {
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

DivMast.getAll = function (filters,result) {
  let sql = `SELECT s.entity_code, e.entity_name, s.div_code,s.div_name FROM div_mast s JOIN qrtag.entity_mast e ON s.entity_code = e.entity_code`;
  const values = [];

  if (Object.keys(filters).length > 0) {
    const filterConditions = Object.keys(filters)
    .filter(key => key !== 'div_code' && key !== 'series_code')
    .map(key => `s.${key} = ?`);
    if (filterConditions.length > 0) {
      sql += ` where `;
    sql += filterConditions.join(' AND ');
    values.push(...Object.values(filters));
  }
}
  ConnectionDB.query(sql, values, (err, res) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      result(err, null);
      return;
    }
    result(null, res);
  });
  // ConnectionDB
  // .query('SELECT * FROM div_mast', (err, res) => {
  //   if (err) {
  //     result(err, null);
  //     return;
  //   }

  //   result(null, res);
  // });
};

DivMast.findById = function (value, result) {
 
  
  ConnectionDB.query('SELECT s.entity_code, e.entity_name, s.div_code,s.div_name FROM qrtag.div_mast s JOIN qrtag.entity_mast e ON s.entity_code = e.entity_code where s.div_code = ?', value, (err, res) => {
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
DivMast.delete = function (value, result) {
  // const vrSeqArray = deleteId;

  
// const placeholders = vrSeqArray.map(() => '?').join(',');

// const sql = `DELETE FROM vr_seq WHERE vrSeq IN (${placeholders})`;
const sql = `DELETE FROM  div_mast where div_code IN ('${value}')`;

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

export default  DivMast

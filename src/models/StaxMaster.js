import ConnectionDB from "../db/ConnnectDB.js"

class StaxMast {
  constructor(StaxMast) {
    this.stax_code = StaxMast.stax_code;
    this.stax_name = StaxMast.stax_name;
    this.stax_for = StaxMast.stax_for;
   
  }
}

StaxMast.create = function (newStax, result) {
  ConnectionDB.query('insert into stax_mast set ?', newStax, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId });
  });
};

StaxMast.update = function (updateStax, result) {
  ConnectionDB.query('update stax_mast set ? where stax_for =?', [updateStax,updateStax.stax_for], (err, res) => {
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

StaxMast.getAll = function (filters, result) {
  let sql = `SELECT * FROM stax_mast s`;
  const values = [];

//   if (Object.keys(filters).length > 0) {
//     const filterConditions = Object.keys(filters)
//     .filter(key => key !== 'stax_for' && key !== 'series_code')
//     .map(key => `s.${key} = ?`);
//     if (filterConditions.length > 0) {
//       sql += ` where `;
//     sql += filterConditions.join(' AND ');
//     values.push(...Object.values(filters));
//   }
// }
  ConnectionDB.query(sql, values, (err, res) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      result(err, null);
      return;
    }
    result(null, res);
  });




  // ConnectionDB.query('SELECT * FROM stax_mast', (err, res) => {
  //   if (err) {
  //     result(err, null);
  //     return;
  //   }

  //   result(null, res);
  // });
};

StaxMast.findById = function (value, result) {
  ConnectionDB.query('select * from stax_mast where stax_for = ?', value, (err, res) => {
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


StaxMast.delete = function (value, result) {
  // const vrSeqArray = deleteId;

  
// const placeholders = vrSeqArray.map(() => '?').join(',');

// const sql = `DELETE FROM vr_seq WHERE vrSeq IN (${placeholders})`;
const sql = `DELETE FROM  stax_mast where stax_for IN ('${value}')`;

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

export default  StaxMast

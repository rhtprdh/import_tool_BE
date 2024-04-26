import ConnectionDB from "../db/ConnnectDB.js"

class EntityMast {
  constructor(EntityMast) {
    this.entity_code = EntityMast.entity_code;
    this.entity_name = EntityMast.entity_name;
    this.gst_code = EntityMast.gst_code;
    this.div_code = EntityMast.div_code;
    this.div_name = EntityMast.div_name;
    this.state_code= EntityMast.state_code;

   
  }
}

EntityMast.create = function (newEntity, result) {
  ConnectionDB.query('insert into entity_mast set ?', newEntity, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId });
  });
};

EntityMast.update = function (updateEntity, result) {
  ConnectionDB.query('update entity_mast set ? where entity_code =?', [updateEntity,updateEntity.entity_code], (err, res) => {
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

EntityMast.getAll = function (filters, result) {
  let sql = `SELECT * FROM entity_mast s`;
  const values = [];

//   if (Object.keys(filters).length > 0) {
//     const filterConditions = Object.keys(filters)
//     .filter(key => key !== 'entity_code' && key !== 'series_code')
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




  // ConnectionDB.query('SELECT * FROM entity_mast', (err, res) => {
  //   if (err) {
  //     result(err, null);
  //     return;
  //   }

  //   result(null, res);
  // });
};

EntityMast.findById = function (value, result) {
 
  
  ConnectionDB.query('select * from entity_mast where entity_code = ?', value, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length === 0) {
      result(null, null);
      return; 
    }

    result(null, new EntityMast(res[0]));
  });
};

EntityMast.delete = function (value, result) {
  // const vrSeqArray = deleteId;

  
// const placeholders = vrSeqArray.map(() => '?').join(',');

// const sql = `DELETE FROM vr_seq WHERE vrSeq IN (${placeholders})`;
const sql = `DELETE FROM  entity_mast where entity_code IN ('${value}')`;

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

export default  EntityMast

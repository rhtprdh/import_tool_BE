import ConnectionDB from "../db/ConnnectDB.js"

class AddonMast {
  constructor(AddonMast) {
    this.addon_code = AddonMast.addon_code;
    this.addon_name= AddonMast.addon_name;
    this.from_date = AddonMast.from_date;
    this.to_date = AddonMast.to_date;
    this.afcode2 = AddonMast.afcode2;
    this.afcode3 = AddonMast.afcode3;
    this.afcode4 = AddonMast.afcode4;
    this.afcode5 = AddonMast.afcode5;
    this.afcode6 = AddonMast.afcode6;
    this.afcode7 = AddonMast.afcode7;
    this.afcode8 = AddonMast.afcode8;
    this.afcode9 = AddonMast.afcode9;
    this.afcode10 = AddonMast.afcode10;
    this.afcode11 = AddonMast.afcode11;
    this.afcode12 = AddonMast.afcode12;
    this.afcode13 = AddonMast.afcode13;
    this.afcode14 = AddonMast.afcode14;
    this.afcode15 = AddonMast.afcode15;
    this.afcode16 = AddonMast.afcode16;
    this.afcode17 = AddonMast.afcode17;
    this.afcode18 = AddonMast.afcode18;
    this.afrate2 = AddonMast.afrate2;
    this.afrate3 = AddonMast.afrate3;
    this.afrate4 = AddonMast.afrate4;
    this.afrate5 = AddonMast.afrate5;
    this.afrate6 = AddonMast.afrate6;
    this.afrate7 = AddonMast.afrate7;
    this.afrate8 = AddonMast.afrate8;
    this.afrate9 = AddonMast.afrate9;
    this.afrate10 = AddonMast.afrate10;
    this.afrate11 = AddonMast.afrate11;
    this.afrate12 = AddonMast.afrate12;
    this.afrate13 = AddonMast.afrate13;
    this.afrate14 = AddonMast.afrate14;
    this.afrate15 = AddonMast.afrate15;
    this.afrate16 = AddonMast.afrate16;
    this.afrate17 = AddonMast.afrate17;
    this.afrate18 = AddonMast.afrate18;
    this.afratei2 = AddonMast.afratei2;
    this.afratei3 = AddonMast.afratei3;
    this.afratei4 = AddonMast.afratei4;
    this.afratei5 = AddonMast.afratei5;
    this.afratei6 = AddonMast.afratei6;
    this.afratei7 = AddonMast.afratei7;
    this.afratei8 = AddonMast.afratei8;
    this.afratei9 = AddonMast.afratei9;
    this.afratei10 = AddonMast.afratei10;
    this.afratei11 = AddonMast.afratei11;
    this.afratei12 = AddonMast.afratei12;
    this.afratei13 = AddonMast.afratei13;
    this.afratei14 = AddonMast.afratei14;
    this.afratei15 = AddonMast.afratei15;
    this.afratei16 = AddonMast.afratei16;
    this.afratei17 = AddonMast.afratei17;
    this.afratei18 = AddonMast.afratei18;
    this.aflogic2 = AddonMast.aflogic2;
    this.aflogic3 = AddonMast.aflogic3;
    this.aflogic4 = AddonMast.aflogic4;
    this.aflogic5 = AddonMast.aflogic5;
    this.aflogic6 = AddonMast.aflogic6;
    this.aflogic7 = AddonMast.aflogic7;
    this.aflogic8 = AddonMast.aflogic8;
    this.aflogic9 = AddonMast.aflogic9;
    this.aflogic10 = AddonMast.aflogic10;
    this.aflogic11 = AddonMast.aflogic11;
    this.aflogic12 = AddonMast.aflogic12;
    this.aflogic13 = AddonMast.aflogic13;
    this.aflogic14 = AddonMast.aflogic14;
    this.aflogic15 = AddonMast.aflogic15;
    this.aflogic16 = AddonMast.aflogic16;
    this.aflogic17 = AddonMast.aflogic17;
    this.aflogic18 = AddonMast.aflogic18;
    this.afsys2 = AddonMast.afsys2;
    this.afsys3 = AddonMast.afsys3;
    this.afsys4 = AddonMast.afsys4;
    this.afsys5 = AddonMast.afsys5;
    this.afsys6 = AddonMast.afsys6;
    this.afsys7 = AddonMast.afsys7;
    this.afsys8 = AddonMast.afsys8;
    this.afsys9 = AddonMast.afsys9;
    this.afsys10 = AddonMast.afsys10;
    this.afsys11 = AddonMast.afsys11;
    this.afsys12 = AddonMast.afsys12;
    this.afsys13 = AddonMast.afsys13;
    this.afsys14 = AddonMast.afsys14;
    this.afsys15 = AddonMast.afsys15;
    this.afsys16 = AddonMast.afsys16;
    this.afsys17 = AddonMast.afsys17;
    this.afsys18 = AddonMast.afsys18;
    this.stax_code = AddonMast.stax_code;
    this.etax_code = AddonMast.etax_code;
    this.user_code = AddonMast.user_code;
    this.lastupdate = AddonMast.lastupdate;
    this.flag = AddonMast.flag;
    this.afacc_code2 = AddonMast.afacc_code2;
    this.afacc_code3 = AddonMast.afacc_code3;
    this.afacc_code4 = AddonMast.afacc_code4;
    this.afacc_code5 = AddonMast.afacc_code5;
    this.afacc_code6 = AddonMast.afacc_code6;
    this.afacc_code7 = AddonMast.afacc_code7;
    this.afacc_code8 = AddonMast.afacc_code8;
    this.afacc_code9 = AddonMast.afacc_code9;
    this.afacc_code10 = AddonMast.afacc_code10;
    this.afacc_code11 = AddonMast.afacc_code11;
    this.afacc_code12 = AddonMast.afacc_code12;
    this.afacc_code13 = AddonMast.afacc_code13;
    this.afacc_code14 = AddonMast.afacc_code14;
    this.afacc_code15 = AddonMast.afacc_code15;
    this.afacc_code16 = AddonMast.afacc_code16;
    this.afacc_code17 = AddonMast.afacc_code17;
    this.afacc_code18 = AddonMast.afacc_code18;

   
  }
}

AddonMast.create = function (newEntity, result) {
  ConnectionDB.query('insert into addon_mast set ?', newEntity, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId });
  });
};

AddonMast.update = function (updateEntity, result) {
  ConnectionDB.query('update addon_mast set ? where addon_code =?', [updateEntity,updateEntity.addon_code], (err, res) => {
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

AddonMast.getAll = function (filters, result) {
  let sql = `SELECT * FROM addon_mast s`;
  const values = [];

//   if (Object.keys(filters).length > 0) {
//     const filterConditions = Object.keys(filters)
//     .filter(key => key !== 'addon_code' && key !== 'series_code')
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




  // ConnectionDB.query('SELECT * FROM addon_mast', (err, res) => {
  //   if (err) {
  //     result(err, null);
  //     return;
  //   }

  //   result(null, res);
  // });
};

AddonMast.findById = function (value, result) {
 
  
  ConnectionDB.query('select * from addon_mast where addon_code = ?', value, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length === 0) {
      result(null, null);
      return; 
    }
    result(null,  res[0]);
 
  });
};
// AddonMast.findById = function (value, result) {
 
  
//   ConnectionDB.query('SELECT s.series_code, s.series_name, s.entity_code, e.entity_name, s.div_code,d.div_name, s.post_code, s.bankId, s.tran_type, s.series_type FROM qrtag.series_mast s JOIN qrtag.entity_mast e ON s.entity_code = e.entity_code JOIN qrtag.div_mast d ON s.div_code = d.div_code where series_code = ?', value, (err, res) => {
//     if (err) {
//       result(err, null);
//       return;
//     }

//     if (res.length === 0) {
//       result(null, null);
//       return; 
//     }

//     result(null, res[0]);
//   });
// };

AddonMast.delete = function (value, result) {
  // const vrSeqArray = deleteId;

  
// const placeholders = vrSeqArray.map(() => '?').join(',');

// const sql = `DELETE FROM vr_seq WHERE vrSeq IN (${placeholders})`;
const sql = `DELETE FROM  addon_mast where addon_code IN ('${value}')`;

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

export default  AddonMast

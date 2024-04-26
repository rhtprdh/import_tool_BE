import ConnectionDB from "../db/ConnnectDB.js"

class CbjVrSeq {
  constructor(cbjData) {
    this.vrSeq=  cbjData.vrSeq;
    this.lastVrno = cbjData.lastVrno;
  }
}
let deleteId=[]

CbjVrSeq.create = function (newCbjData, result) {
  ConnectionDB.query('insert into vr_seq set ?', newCbjData, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId });
  });
};

CbjVrSeq.update = function (updateCbjData, result) {
  
  ConnectionDB.query('update vr_seq set ? where vrSeq =?', [updateCbjData,updateCbjData.vrSeq], (err, res) => {
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
CbjVrSeq.updateMaster = function (updateCbjData, result) {
    
    ConnectionDB.query('update vr_seq set ? where vrSeq =?', [updateCbjData,updateCbjData.vrSeq], (err, res) => {
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

CbjVrSeq.getAll = function (result) {
  ConnectionDB
  .query('SELECT * FROM vr_seq', (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, res);
  });
};

CbjVrSeq.findById = function (value, result) {
  ConnectionDB.query('select * from vr_seq where vrSeq = ?', value, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length === 0) { 
        const newCbjVrSeq =  { vrSeq: value, lastVrno: 1 }
        deleteId.push(newCbjVrSeq.vrSeq);
        let updatedVrno;
        if(value.length>5){ 
        updatedVrno=`${value}-001`
        }else if(value.length <=5){
          updatedVrno=`${value}-00001`
        }
      ConnectionDB.query('insert into vr_seq set ?', newCbjVrSeq, (err, res) => {
        if (err) {
          result(err, null);
          return;
        }
    
        result(null, {updatedVrno});
      });
      return; 
    }
    let lastVrNum =res[0].lastVrno
    lastVrNum++
    let updatedVrno
    if(value.length>5){
     updatedVrno=`${value}-${lastVrNum.toString().padStart(3, '0')}`
    }else if(value.length <=5){
      updatedVrno=`${value}-${lastVrNum.toString().padStart(5, '0')}`
    }
    result(null,{updatedVrno})
   
    
    const updateCbjData =  { vrSeq: value, lastVrno: lastVrNum }
    ConnectionDB.query('update vr_seq set ? where vrSeq =?', [updateCbjData,updateCbjData.vrSeq], (err, res) => {
        if (err) {
          // result(err, null);
          return;
        }     
        
        if (res.affectedRows === 0) {
          result(new Error('No rows were updated'), null);
          return;
        }
        // result(null, res.affectedRows);   
      });
  //  result(null, new CbjVrSeq(res[0]));

  });
};

CbjVrSeq.findByIdTwo = function (value, result) {
  ConnectionDB.query('select * from vr_seq where vrSeq = ?', value, (err, res) => {
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

CbjVrSeq.delete = function (value, result) {
  const vrSeqArray = deleteId;

  
// const placeholders = vrSeqArray.map(() => '?').join(',');

// const sql = `DELETE FROM vr_seq WHERE vrSeq IN (${placeholders})`;
const sql = `DELETE FROM vr_seq WHERE vrSeq IN ('${value}')`;

// Execute the delete query with the array of vrSeq values
ConnectionDB.query(sql, vrSeqArray, (err, res) => {
  if (err) {
    console.error('Error executing delete query:', err);
    // Handle error
  } else {
    console.log('Deleted rows:', res.affectedRows);
    // Handle successful deletion
  }
});

   
  };

  CbjVrSeq.deleteAll = function (value, result) {
  ConnectionDB.query('DELETE FROM vr_seq', value, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
  });
  
     
    };

  CbjVrSeq.findByIdTokenDayBook = function (value, result) {
 
  
    ConnectionDB.query('select * from vr_seq where vrSeq = ?', value, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
  
      if (res.length === 0) { 
          const newCbjVrSeq =  { vrSeq: value, lastVrno: 1 }
          deleteId.push(newCbjVrSeq.vrSeq);
          let updatedVrno =`${value}-001`
        ConnectionDB.query('insert into vr_seq set ?', newCbjVrSeq, (err, res) => {
          if (err) {
            result(err, null);
            return;
          }
      
          result(null, {updatedVrno});
        });
        return; 
      }
      let lastVrNum =res[0].lastVrno
      lastVrNum++
      let updatedVrno=`${value}-${lastVrNum.toString().padStart(3, '0')}`
      result(null,{updatedVrno})
     
      
      const updateCbjData =  { vrSeq: value, lastVrno: lastVrNum }
      ConnectionDB.query('update vr_seq set ? where vrSeq =?', [updateCbjData,updateCbjData.vrSeq], (err, res) => {
          if (err) {
            // result(err, null);
            return;
          }     
          
          if (res.affectedRows === 0) {
            result(new Error('No rows were updated'), null);
            return;
          }
          // result(null, res.affectedRows);   
        });
    //  result(null, new CbjVrSeq(res[0]));
  
    });
  };

export default  CbjVrSeq

import mysql from 'mysql'

// const ConnectDB = async () => {
//     try {
//         var con = mysql.createConnection({
//             host: "localhost",
//             user: "root",
//             database: "qrtag",
//             password: "Sale@123456",
//           });
//           con.connect(function(err) {
//                 if (err) throw err;
//                 console.log("Database Connected!");
//               });
        
//     } catch (error) {
//         console.log("Databse connection failed", error)        
//     }
// }

const ConnectDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sale@123456',
  database: 'qrtag',
});

ConnectDB.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

//module.exports = connection;


export default ConnectDB
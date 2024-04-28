
// const machines = [
//   { id: 1, name: 'Machine 1', port: 'COM1', baudRate: 9600, dataBits: 8, parity: 'none', stopBits: 1 },
//   { id: 2, name: 'Machine 2', port: 'COM2', baudRate: 9600, dataBits: 8, parity: 'none', stopBits: 1 },
//   // Add more machines with their configurations as needed
// ];

// const getMachineById = (machineId) => {
//   return machines.find((machine) => machine.id === machineId);
// };

// const readDataFromSerialPort = (machine) => {
//   return new Promise((resolve, reject) => {
//     const serialPort = new Serial({
//       path: machine.port,
//       baudRate: machine.baudRate,
//       dataBits: machine.dataBits,
//       parity: machine.parity,
//       stopBits: machine.stopBits,
//       autoOpen: false,
//     });

//     serialPort.open((err) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       const parser = serialPort.pipe(new Readline({ delimiter: '\r\n' }));

//       parser.once('data', (line) => {
//         serialPort.close(); // Close the port after reading the data
//         resolve(line);
//       });
//     });
//   });
// };

// const WeighmentDAta = {
//   serialData: async (req, res) => {
//   // try {
//   //   console.log('request is come')
//   //       const data = await readDataFromSerialPort();
//   //       res.json({ data });
//   //     } catch (error) {
//   //       console.log(error)
//   //       console.log("error")
//   //       console.error('Error reading data from serial port:', error);
//   //       res.status(500).json({ error: 'Internal server error' });
        
//   //     }
//   const machineId = parseInt(req.params.machineId, 10);
//   const machine = getMachineById(machineId);

//   if (!machine) {
//     res.status(404).json({ error: 'Machine not found' });
//     return;
//   }
//   try {
//     const data = await readDataFromSerialPort(machine);
//     res.json({ machineName: machine.name, weight: data });
//   } catch (error) {
//     console.error(`Error reading data from ${machine.name} serial port:`, error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
  
//     }
// }
//  export default WeighmentDAta



// import express from 'express';
// import fs from 'fs';
// import os from 'os';

// const WeighmentData = express();

// WeighmentData.get('/readFile', (req, res) => {
//   console.log("req is come")
//   const systemDrive = os.platform() === 'win32' ? os.homedir().split(path.sep)[0] : '/';

//   const filePath = 'D:/wbdata.wbg';
//   // const filePath = `${systemDrive}/wbdata.wbg`;

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error reading file');
//     }
//     // req.send("get req come")
//     res.send(data);
//   });
// });

// export default WeighmentData;

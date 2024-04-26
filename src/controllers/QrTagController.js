import QrTag from "../models/QrTag.js";


const QrTagController = {
  create: (req, res) => {
    // const newQrTag = new QrTag({
    //   div_code : req.body.div_code,
    //   entity_code : req.body.entity_code,
    //   batchno: req.body.batchno,
    //   batch_qty: req.body.batch_qty,
    // });
    
              const values = [];

              for (const obj of req.body) {
              // for (const batchno_ref in obj) {
              // valueArray.push(obj[batchno_ref]);
              // }
              values.push(obj);
              }

    QrTag.create(values, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'Batch created successfully' });
    });
  },

  update: (req, res) => {
    const updateQrTag = new QrTag({
        div_code : req.body.div_code,
        entity_code : req.body.entity_code,
        slno: req.body.slno,
        batchno_ref: req.body.batchno_ref,
        batchno: req.body.batchno,
        qr_file: req.body.qr_file,
    });
    const batchno_ref = req.params.batchno_ref;
    // if()
 
    QrTag.update(updateQrTag, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ data: data });
    });
  },

  getAll: (req, res) => {
    QrTag.getAll((err, qrtag) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({ data:qrtag});
    });
  },
  // getAll: (req, res) => {
  //   DivMast.getAll((err, divisions) => {
  //     if (err) {
  //       res.status(500).send({ error: err.message });
  //       return;
  //     }

  //     res.status(200).send({ data: divisions });
  //   });
  // },

  findById: (req, res) => {
    // const div_code = parseInt(req.params.div_code);  //it used when you try to find by number
    let value;
    const batchno_ref = req.params.batchno_ref;
    const match = batchno_ref.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }

    QrTag.findById(value, (err, user) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({ error: 'batch not found' });
          return;
        }

        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({data:user});
    });
  },
};

export default QrTagController;

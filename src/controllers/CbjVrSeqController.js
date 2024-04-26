import CbjVrSeq from "../models/CbjVrSeq.js";



const CbjVrSeqController = {
  create: (req, res) => {
    const newCbjVrSeq = new CbjVrSeq({
        vrSeq:  req.body.vrSeq,
        lastVrno:  req.body.lastVrno
    });
 
    CbjVrSeq.create(newCbjVrSeq, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ data: data });
    });
  },

  update: (req, res) => {
    const updateCbjVrSeq = new CbjVrSeq({
        vrSeq:  req.body.vrSeq,
        lastVrno:  req.body.lastVrno 
    });
    const id = req.params.id;
    // if()
     
    CbjVrSeq.findById(req.body.vrSeq, (err, data) => {
        if (err) {
            CbjVrSeq.create(updateCbjVrSeq, (err, data) => {
                if (err) {
                  res.status(500).send({ error: err.message });
                  return;
                }
          
                res.status(201).send({ data: data });
              });
         
        }

        updateCbjVrSeq.lastVrno = req.body.lastVrno+1;
            CbjVrSeq.update(updateCbjVrSeq, (err, data) => {
                if (err) {
                  res.status(500).send({ error: err.message });
                  return;
                }
          
                res.status(201).send({data: data });
              });
  
      //  res.status(200).send({data: data });
      });
 
  
  },

  getAll: (req, res) => {
    CbjVrSeq.getAll((err, CbjVrSeqs) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({ data: CbjVrSeqs });
    });
  },

  findById: (req, res) => {
    // const div_code = parseInt(req.params.div_code);  //it used when you try to find by number
    
    let value;
    const id = req.params.id;
    const match = id.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }

    CbjVrSeq.findById(value, (err, data) => {
        
        if (err) {
            if (err.kind === 'not_found') {
              res.status(404).send({ error: 'Crop Year not found' });
              return;
            }
    
            res.status(500).send({ error: err.message });
            return;
          }

      res.status(200).send({data: data });
    });
  },


  findByIdTwo: (req, res) => {
    // const div_code = parseInt(req.params.div_code);  //it used when you try to find by number
    let value;
    const id = req.params.id;
    const match = id.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }

    CbjVrSeq.findByIdTwo(value, (err, vrno) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({ error: 'Voucher Sequnce not found' });
          return;
        }

        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({  data: vrno });
    });
  },

  // delete: (req, res) => {
  //   // const div_code = parseInt(req.params.div_code);  //it used when you try to find by number
  //   let value;
  //   const entity_code = req.params.entity_code;
  //   const match = entity_code.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
  //   if (match){
  //      value = match[1];
  //   }

  //   CbjVrSeq.delete(value, (err, user) => {
  //     if (err) {
  //       if (err.kind === 'not_found') {
  //         res.status(404).send({ error: 'data not found' });
  //         return;
  //       }

  //       res.status(500).send({ message: 'data delting error', error: err.message });
  //       return;
  //     }

  //     res.status(200).send({ message: 'data delted successfully', data: user });
  //   });
  // },
  delete: (req, res) => {
    let value;
    const id = req.params.id;
    const match = id.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }     
    CbjVrSeq.delete(value, (err, data) => {
      if (err) {
        res.status(500).send({message: 'data delting error', error: err.message });
        return;
      }

      res.status(200).send({ data: data });
    });
  },

  deleteAll: (req, res) => {
  
    CbjVrSeq.deleteAll((err, data) => {
      if (err) {
        res.status(500).send({message: 'data delting error', error: err.message });
        return;
      }

      res.status(200).send({ data: data });
    });
  },


  findByIdTokenDayBook: (req, res) => {
    // const div_code = parseInt(req.params.div_code);  //it used when you try to find by number
    
    let value;
    const id = req.params.id;
    const match = id.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }

    CbjVrSeq.findByIdTokenDayBook(value, (err, data) => {
        
        if (err) {
            if (err.kind === 'not_found') {
              res.status(404).send({ error: 'token seq not found' });
              return;
            }
    
            res.status(500).send({ error: err.message });
            return;
          }

      res.status(200).send({data: data });
    });
  },

  updateMaster: (req, res) => {
      const updateCbjVrSeq = new CbjVrSeq({
        vrSeq:  req.body.vrSeq,
        lastVrno:  req.body.lastVrno ,
        entity_code:  req.body.entity_code,
        // entity_name:  req.body.entity_name,
      div_code:  req.body.div_code,
    });
    const series_code = req.params.series_code;
    // if()
 
    CbjVrSeq.updateMaster(updateCbjVrSeq, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'voucher sequence updated successfully', data: data });
    });
  },
};

export default CbjVrSeqController;

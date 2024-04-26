import StaxMast from "../models/StaxMaster.js";


const StaxController = {
  create: (req, res) => {
    const newEntity = new StaxMast({
        stax_code:  req.body.stax_code,
        stax_name:  req.body.stax_name,
        stax_for:  req.body.stax_for,
      
    });
 
    StaxMast.create(newEntity, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'stax created successfully', data: data });
    });
  },

  update: (req, res) => {
    const updateStax = new StaxMast({
        stax_code:  req.body.stax_code,
        stax_name:  req.body.stax_name,
        stax_for:  req.body.stax_for,
    });
    const stax_code = req.params.stax_code;
    // if()
 
    StaxMast.update(updateStax, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'Sale Tax updated successfully', data: data });
    });
  },

  getAll: (req, res) => {
    const filters = req.query;
    StaxMast.getAll(filters,(err, divisions) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({ data: divisions });
    });
  },

  findById: (req, res) => {
    // const div_code = parseInt(req.params.div_code);  //it used when you try to find by number
    let value;
    const stax_code = req.params.stax_code;
    const match = stax_code.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }

    StaxMast.findById(value, (err, user) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({ error: 'Sale tax not found' });
          return;
        }

        res.status(500).send({ error: err.message });
        return;
      }
      console.log(user);
      res.status(200).send({ message: 'Sale tax retrieved successfully', data: user });
    });
  },
  delete: (req, res) => {
    let value;
    const id = req.params.id;
    const match = id.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }     
    StaxMast.delete(value, (err, data) => {
      if (err) {
        res.status(500).send({message: 'data delting error', error: err.message });
        return;
      }

      res.status(200).send({ data: data });
    });
  },
};

export default StaxController;

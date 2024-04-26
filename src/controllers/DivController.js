import DivMast from '../models/DivMast.js'

const DivController = {
  create: (req, res) => {
    const newDiv = new DivMast({
      div_code:  req.body.div_code,
      div_name:  req.body.div_name,
      entity_code:  req.body.entity_code
    });
 
    DivMast.create(newDiv, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'User created successfully', data: data });
    });
  },

  update: (req, res) => {
    const updateDiv = new DivMast({
      div_code:  req.body.div_code,
      div_name:  req.body.div_name,
      entity_code:  req.body.entity_code
    });
    const div_code = req.params.div_code;
    // if()
 
    DivMast.update(updateDiv, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'User updated successfully', data: data });
    });
  },

  getAll: (req, res) => {
    const filters = req.query;
    DivMast.getAll(filters,(err, divisions) => {
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
    const div_code = req.params.div_code;
    const match = div_code.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }

    DivMast.findById(value, (err, user) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({ error: 'User not found' });
          return;
        }

        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({ message: 'Division retrieved successfully', data: user });
    });
  },

  delete: (req, res) => {
    let value;
    const id = req.params.id;
    const match = id.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }     
    DivMast.delete(value, (err, data) => {
      if (err) {
        res.status(500).send({message: 'data delting error', error: err.message });
        return;
      }

      res.status(200).send({ data: data });
    });
  },

};

export default DivController;

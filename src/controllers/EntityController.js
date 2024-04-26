import EntityMast from "../models/EntityMast.js";


const EntityController = {
  create: (req, res) => {
    const newEntity = new EntityMast({
        entity_code:  req.body.entity_code,
        entity_name:  req.body.entity_name,
        gst_code:  req.body.gst_code,
      div_code:  req.body.div_code,
      div_name:  req.body.div_name,
      state_code : req.body.state_code,
      
      
    });
 
    EntityMast.create(newEntity, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'User created successfully', data: data });
    });
  },

  update: (req, res) => {
    const updateEntity = new EntityMast({
        entity_code:  req.body.entity_code,
        entity_name:  req.body.entity_name,
      div_code:  req.body.div_code,
      div_name:  req.body.div_name,
    });
    const entity_code = req.params.entity_code;
    // if()
 
    EntityMast.update(updateEntity, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'User updated successfully', data: data });
    });
  },

  getAll: (req, res) => {
    const filters = req.query;
    EntityMast.getAll(filters,(err, divisions) => {
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
    const entity_code = req.params.entity_code;
    const match = entity_code.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }

    EntityMast.findById(value, (err, user) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({ error: 'User not found' });
          return;
        }

        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({ message: 'User retrieved successfully', data: user });
    });
  },
  delete: (req, res) => {
    let value;
    const id = req.params.id;
    const match = id.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }     
    EntityMast.delete(value, (err, data) => {
      if (err) {
        res.status(500).send({message: 'data delting error', error: err.message });
        return;
      }

      res.status(200).send({ data: data });
    });
  },
};

export default EntityController;

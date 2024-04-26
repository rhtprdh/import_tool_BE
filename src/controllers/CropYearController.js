import CropYear from "../models/CropYear.js";


const CropYearController = {
  create: (req, res) => {
    const newCrop = new CropYear({
      div_code:  req.body.div_code,
      entity_code:  req.body.entity_code,
      from_date: req.body.from_date,
      to_date: req.body.to_date,
      crop_year: req.body.crop_year,
    });
 
    CropYear.create(newCrop, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'Crop Year created successfully', data: data });
    });
  },

  update: (req, res) => {
    const updateCrop = new CropYear({
        id:  req.body.id,
        div_code:  req.body.div_code,
        entity_code:  req.body.entity_code,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
        crop_year: req.body.crop_year,
    });
    const id = req.params.id;
    // if()
 
    CropYear.update(updateCrop, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({data: data });
    });
  },

  getAll: (req, res) => {
    CropYear.getAll((err, cropYEars) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({ data: cropYEars });
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

    CropYear.findById(value, (err, user) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({ error: 'Crop Year not found' });
          return;
        }

        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({ message: 'Crop year retrieved successfully', data: user });
    });
  },
};

export default CropYearController;

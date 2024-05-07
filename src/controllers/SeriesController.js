import SeriesMast from "../models/SeriesMast.js";


const SeriesController = {
  create: (req, res) => {
    const newSeries = new SeriesMast({
        series_code: req.body.series_code,
        series_name: req.body.series_name,
        entity_code:  req.body.entity_code,
        // entity_name:  req.body.entity_name,
      div_code:  req.body.div_code,
    //   div_name:  req.body.div_name,
      post_code: req.body.post_code,
      bankId   : req.body.bankId,
      tran_type : req.body.tran_type,
      series_type : req.body.series_type,
      state_code : req.body.state_code,
      
    });
 
    SeriesMast.create(newSeries, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'Sereis created successfully', data: data });
    });
  },

  update: (req, res) => {
    const updateSeries = new SeriesMast({
        series_code: req.body.series_code,
        series_name: req.body.series_name,
        entity_code:  req.body.entity_code,
        // entity_name:  req.body.entity_name,
      div_code:  req.body.div_code,
    //   div_name:  req.body.div_name,
      post_code: req.body.post_code,
      bankId   : req.body.bankId,
      tran_type : req.body.tran_type,
      series_type : req.body.series_type,
      state_code : req.body.state_code,
    });
    const series_code = req.params.series_code;
    // if()
 
    SeriesMast.update(updateSeries, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'Series updated successfully', data: data });
    });
  },

  getAll: (req, res) => {
    const filters = req.query;
    SeriesMast.getAll(filters,(err, Serieses) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({ data: Serieses });
    });
  },

  findById: (req, res) => {
    // const div_code = parseInt(req.params.div_code);  //it used when you try to find by number
    let value;
    const series_code = req.params.series_code;
    const match = series_code.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }

    SeriesMast.findById(value, (err, user) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({ error: 'Series not found' });
          return;
        }

        res.status(500).send({ error: err.message });
        return;
      }

      res.status(200).send({ message: 'Series retrieved successfully', data: user });
    });
  },

  delete: (req, res) => {
    let value;
    const id = req.params.id;
    const match = id.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }     
    SeriesMast.delete(value, (err, data) => {
      if (err) {
        res.status(500).send({message: 'data delting error', error: err.message });
        return;
      }

      res.status(200).send({ data: data });
    });
  },

};

export default SeriesController;

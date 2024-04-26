import AddonMast from "../models/AddonMast.js";


const AddonController = {
  create: (req, res) => {
    const newAddon = new AddonMast({
        addon_code:  req.body.addon_code,
        addon_name: req.body.addon_name,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
        afcode2: req.body.afcode2,
        afcode3: req.body.afcode3,
        afcode4: req.body.afcode4,
        afcode5: req.body.afcode5,
        afcode6: req.body.afcode6,
        afcode7: req.body.afcode7,
        afcode8: req.body.afcode8,
        afcode9: req.body.afcode9,
        afcode10: req.body.afcode10,
        afcode11: req.body.afcode11,
        afcode12: req.body.afcode12,
        afcode13: req.body.afcode13,
        afcode14: req.body.afcode14,
        afcode15: req.body.afcode15,
        afcode16: req.body.afcode16,
        afcode17: req.body.afcode17,
        afcode18: req.body.afcode18,
        afrate2: req.body.afrate2,
        afrate3: req.body.afrate3,
        afrate4: req.body.afrate4,
        afrate5: req.body.afrate5,
        afrate6: req.body.afrate6,
        afrate7: req.body.afrate7,
        afrate8: req.body.afrate8,
        afrate9: req.body.afrate9,
        afrate10: req.body.afrate10,
        afrate11: req.body.afrate11,
        afrate12: req.body.afrate12,
        afrate13: req.body.afrate13,
        afrate14: req.body.afrate14,
        afrate15: req.body.afrate15,
        afrate16: req.body.afrate16,
        afrate17: req.body.afrate17,
        afrate18: req.body.afrate18,
        afratei2: req.body.afratei2,
        afratei3: req.body.afratei3,
        afratei4: req.body.afratei4,
        afratei5: req.body.afratei5,
        afratei6: req.body.afratei6,
        afratei7: req.body.afratei7,
        afratei8: req.body.afratei8,
        afratei9: req.body.afratei9,
        afratei10: req.body.afratei10,
        afratei11: req.body.afratei11,
        afratei12: req.body.afratei12,
        afratei13: req.body.afratei13,
        afratei14: req.body.afratei14,
        afratei15: req.body.afratei15,
        afratei16: req.body.afratei16,
        afratei17: req.body.afratei17,
        afratei18: req.body.afratei18,
        aflogic2: req.body.aflogic2,
        aflogic3: req.body.aflogic3,
        aflogic4: req.body.aflogic4,
        aflogic5: req.body.aflogic5,
        aflogic6: req.body.aflogic6,
        aflogic7: req.body.aflogic7,
        aflogic8: req.body.aflogic8,
        aflogic9: req.body.aflogic9,
        aflogic10: req.body.aflogic10,
        aflogic11: req.body.aflogic11,
        aflogic12: req.body.aflogic12,
        aflogic13: req.body.aflogic13,
        aflogic14: req.body.aflogic14,
        aflogic15: req.body.aflogic15,
        aflogic16: req.body.aflogic16,
        aflogic17: req.body.aflogic17,
        aflogic18: req.body.aflogic18,
        afsys2: req.body.afsys2,
        afsys3: req.body.afsys3,
        afsys4: req.body.afsys4,
        afsys5: req.body.afsys5,
        afsys6: req.body.afsys6,
        afsys7: req.body.afsys7,
        afsys8: req.body.afsys8,
        afsys9: req.body.afsys9,
        afsys10: req.body.afsys10,
        afsys11: req.body.afsys11,
        afsys12: req.body.afsys12,
        afsys13: req.body.afsys13,
        afsys14: req.body.afsys14,
        afsys15: req.body.afsys15,
        afsys16: req.body.afsys16,
        afsys17: req.body.afsys17,
        afsys18: req.body.afsys18,
        stax_code: req.body.stax_code,
        etax_code: req.body.etax_code,
        user_code: req.body.user_code,
        lastupdate: req.body.lastupdate,
        flag: req.body.flag,
        afacc_code2: req.body.afacc_code2,
        afacc_code3: req.body.afacc_code3,
        afacc_code4: req.body.afacc_code4,
        afacc_code5: req.body.afacc_code5,
        afacc_code6: req.body.afacc_code6,
        afacc_code7: req.body.afacc_code7,
        afacc_code8: req.body.afacc_code8,
        afacc_code9: req.body.afacc_code9,
        afacc_code10: req.body.afacc_code10,
        afacc_code11: req.body.afacc_code11,
        afacc_code12: req.body.afacc_code12,
        afacc_code13: req.body.afacc_code13,
        afacc_code14: req.body.afacc_code14,
        afacc_code15: req.body.afacc_code15,
        afacc_code16: req.body.afacc_code16,
        afacc_code17: req.body.afacc_code17,
        afacc_code18: req.body.afacc_code18,

      
    });
 
    AddonMast.create(newAddon, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'Addon created successfully', data: data });
    });
  },

  update: (req, res) => {
    const updateAddon = new AddonMast({
        addon_code:  req.body.addon_code,
        addon_name: req.body.addon_name,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
        afcode2: req.body.afcode2,
        afcode3: req.body.afcode3,
        afcode4: req.body.afcode4,
        afcode5: req.body.afcode5,
        afcode6: req.body.afcode6,
        afcode7: req.body.afcode7,
        afcode8: req.body.afcode8,
        afcode9: req.body.afcode9,
        afcode10: req.body.afcode10,
        afcode11: req.body.afcode11,
        afcode12: req.body.afcode12,
        afcode13: req.body.afcode13,
        afcode14: req.body.afcode14,
        afcode15: req.body.afcode15,
        afcode16: req.body.afcode16,
        afcode17: req.body.afcode17,
        afcode18: req.body.afcode18,
        afrate2: req.body.afrate2,
        afrate3: req.body.afrate3,
        afrate4: req.body.afrate4,
        afrate5: req.body.afrate5,
        afrate6: req.body.afrate6,
        afrate7: req.body.afrate7,
        afrate8: req.body.afrate8,
        afrate9: req.body.afrate9,
        afrate10: req.body.afrate10,
        afrate11: req.body.afrate11,
        afrate12: req.body.afrate12,
        afrate13: req.body.afrate13,
        afrate14: req.body.afrate14,
        afrate15: req.body.afrate15,
        afrate16: req.body.afrate16,
        afrate17: req.body.afrate17,
        afrate18: req.body.afrate18,
        afratei2: req.body.afratei2,
        afratei3: req.body.afratei3,
        afratei4: req.body.afratei4,
        afratei5: req.body.afratei5,
        afratei6: req.body.afratei6,
        afratei7: req.body.afratei7,
        afratei8: req.body.afratei8,
        afratei9: req.body.afratei9,
        afratei10: req.body.afratei10,
        afratei11: req.body.afratei11,
        afratei12: req.body.afratei12,
        afratei13: req.body.afratei13,
        afratei14: req.body.afratei14,
        afratei15: req.body.afratei15,
        afratei16: req.body.afratei16,
        afratei17: req.body.afratei17,
        afratei18: req.body.afratei18,
        aflogic2: req.body.aflogic2,
        aflogic3: req.body.aflogic3,
        aflogic4: req.body.aflogic4,
        aflogic5: req.body.aflogic5,
        aflogic6: req.body.aflogic6,
        aflogic7: req.body.aflogic7,
        aflogic8: req.body.aflogic8,
        aflogic9: req.body.aflogic9,
        aflogic10: req.body.aflogic10,
        aflogic11: req.body.aflogic11,
        aflogic12: req.body.aflogic12,
        aflogic13: req.body.aflogic13,
        aflogic14: req.body.aflogic14,
        aflogic15: req.body.aflogic15,
        aflogic16: req.body.aflogic16,
        aflogic17: req.body.aflogic17,
        aflogic18: req.body.aflogic18,
        afsys2: req.body.afsys2,
        afsys3: req.body.afsys3,
        afsys4: req.body.afsys4,
        afsys5: req.body.afsys5,
        afsys6: req.body.afsys6,
        afsys7: req.body.afsys7,
        afsys8: req.body.afsys8,
        afsys9: req.body.afsys9,
        afsys10: req.body.afsys10,
        afsys11: req.body.afsys11,
        afsys12: req.body.afsys12,
        afsys13: req.body.afsys13,
        afsys14: req.body.afsys14,
        afsys15: req.body.afsys15,
        afsys16: req.body.afsys16,
        afsys17: req.body.afsys17,
        afsys18: req.body.afsys18,
        stax_code: req.body.stax_code,
        etax_code: req.body.etax_code,
        user_code: req.body.user_code,
        lastupdate: req.body.lastupdate,
        flag: req.body.flag,
        afacc_code2: req.body.afacc_code2,
        afacc_code3: req.body.afacc_code3,
        afacc_code4: req.body.afacc_code4,
        afacc_code5: req.body.afacc_code5,
        afacc_code6: req.body.afacc_code6,
        afacc_code7: req.body.afacc_code7,
        afacc_code8: req.body.afacc_code8,
        afacc_code9: req.body.afacc_code9,
        afacc_code10: req.body.afacc_code10,
        afacc_code11: req.body.afacc_code11,
        afacc_code12: req.body.afacc_code12,
        afacc_code13: req.body.afacc_code13,
        afacc_code14: req.body.afacc_code14,
        afacc_code15: req.body.afacc_code15,
        afacc_code16: req.body.afacc_code16,
        afacc_code17: req.body.afacc_code17,
        afacc_code18: req.body.afacc_code18,
    });
    const addon_code = req.params.addon_code;
    // if()
 
    AddonMast.update(updateAddon, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }

      res.status(201).send({ message: 'Addon updated successfully', data: data });
    });
  },

  getAll: (req, res) => {
    const filters = req.query;
    AddonMast.getAll(filters,(err, divisions) => {
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
    const addon_code = req.params.addon_code;
    const match = addon_code.match(/:([^:]+)/);    // Regex to capture the substring after the colon (:)
    if (match){
       value = match[1];
    }

    AddonMast.findById(value, (err, user) => {
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
    AddonMast.delete(value, (err, data) => {
      if (err) {
        res.status(500).send({message: 'data delting error', error: err.message });
        return;
      }

      res.status(200).send({ data: data });
    });
  },
};

export default AddonController;

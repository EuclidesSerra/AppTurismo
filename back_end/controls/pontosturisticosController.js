const PontoTuristico = require('../models/pontosturisticosModel.js')

exports.getPontoTuristico = async(req, res) => {
    try {
        const PontosTuristicos = await PontoTuristico.PontoTuristicoModel.find();
        res.json(PontosTuristicos)
        //res.send(PontosTuristicos);
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getonePontoTuristico = async (req, res) => {   
  try {;
    res.status(201).json(await PontoTuristico.PontoTuristicoModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createPontoTuristico = async (req, res) => {   
    try {;
      res.status(201).json(await PontoTuristico.PontoTuristicoModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updatePontoTuristico = async (req, res) => {   
    try {;
      res.status(201).json(await PontoTuristico.PontoTuristicoModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deletePontoTuristico = async (req, res) => {   
    try {;
      res.status(201).json(await PontoTuristico.PontoTuristicoModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

const puntoModel = require('../models/puntoModel');

exports.getRegistros = async (req, res) => {
  try {
    const registros = await puntoModel.getRegistros();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar registros" });
  }
};

exports.registrarPonto = async (req, res) => {
  try {
    const novoRegistro = await puntoModel.registrarPonto(req.body);
    res.status(201).json(novoRegistro);
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar ponto" });
  }
};

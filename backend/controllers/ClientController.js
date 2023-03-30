import ClientModel from '../models/ClientModel.js';

export const getAllClients = async (req, res) => {
  try {
    const Clientes = await ClientModel.findAll();
    res.json(Clientes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getClient = async (req, res) => {
  try {
    const Cliente = await ClientModel.findAll({ where: { id: req.params.id } });
    res.json(Cliente[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const CreateClient = async (req, res) => {
  try {
    await ClientModel.create(req.body);
    res.json({ message: 'Registro creado correctamente' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const UpdateClient = async (req, res) => {
  try {
    await ClientModel.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Registro actualizado correctamente' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const DeleteClient = async (req, res) => {
  try {
    await ClientModel.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Registro borrado correctamente' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

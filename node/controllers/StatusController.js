import StatusModel from "../models/StatusModel.js";

//Mostrar todos los registros
export const getAllStatus = async (req, res) => {
  try {
    const status = await StatusModel.findAll();
    res.json(status);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getStatusById = async (req, res) => {
  try {
    const status = await StatusModel.findAll({
      where: { id: req.params.id },
    });
    res.json(status[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createStatus = async (req, res) => {
  try {
    await StatusModel.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    await StatusModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un registro
export const deleteStatus = async (req, res) => {
  try {
    await StatusModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

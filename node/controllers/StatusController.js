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

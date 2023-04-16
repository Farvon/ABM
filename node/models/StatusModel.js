//importar conexion a la db
import db from "../database/db.js";

//importamo sequelize
import { DataTypes } from "sequelize";

//se colocan los campos que vamos a utilizar que provienen de la db
const StatusModel = db.define(
  "status",
  {
    status: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "status",
  }
);

export default StatusModel;

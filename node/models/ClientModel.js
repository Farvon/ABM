//importar conexion a la db
import db from "../database/db.js";

//importamo sequelize
import { DataTypes } from "sequelize";

//se colocan los campos que vamos a utilizar que provienen de la db
const ClientModel = db.define(
  "clientes",
  {
    name: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
    status: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "clientes",
  }
);

export default ClientModel;

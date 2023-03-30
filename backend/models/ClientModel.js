import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const ClientModel = db.define(
  'clientes',
  {
    name: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'clientes',
  }
);

export default ClientModel;

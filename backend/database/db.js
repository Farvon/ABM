import { Sequelize } from 'sequelize';

const db = new Sequelize('clientesdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;

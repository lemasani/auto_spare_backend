const { Sequelize } = require('sequelize');
const mysql = require('mysql2')

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME ,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql', // or 'postgres', 'sqlite', 'mariadb', 'mssql'
  }
);

module.exports = sequelize;

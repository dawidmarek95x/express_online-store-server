const Sequelize = require("sequelize/lib/sequelize");

const sequelize = new Sequelize("node-complete", "root", process.env.SQL_PASS, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

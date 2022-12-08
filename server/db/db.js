const Sequelize = require("sequelize");

const config = {
  logging: false,
};

if (process.env.LOGGING) {
  delete config.logging;
}

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/pick_em"
);

module.exports = db;

//npm i jsonwebtoken bcrypt dotenv

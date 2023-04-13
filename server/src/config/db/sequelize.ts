import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize( // DB connection
  process.env.database!,
  process.env.username!,
  process.env.password!,
  {
    host: process.env.host!,
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 100000,
      idle: 10000,
    },
    define: {
      timestamps: false,
    },
    logging: false,
  }
);

sequelize.authenticate()


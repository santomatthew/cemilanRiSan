import db from "../config/db.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const User = db.define(
  "USERS",
  {
    name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.TEXT,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;

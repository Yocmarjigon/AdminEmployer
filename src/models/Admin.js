import { Sequelize, DataTypes } from "sequelize";
import { datasource } from "../config/database.js";

const Admin = datasource.define("admins", {
  id : {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    nullable: false
  },
  password: {
    type: DataTypes.STRING,
    nullable: false
  }

}, { timestamps: false, tableName: "admins" });


export default Admin
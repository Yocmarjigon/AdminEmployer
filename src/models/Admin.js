import { DataTypes } from "sequelize";
import { datasource } from "../config/database.js";

const Administrador = datasource.define("administrador", {
  id : {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    nullable: false
  },
 correo: {
    type: DataTypes.STRING,
    unique: true,
    nullable: false
  },
  contraseña: {
    type: DataTypes.STRING,
    nullable: false
  }

}, { timestamps: false, tableName: "administrador" });

console.log(Administrador === datasource.models.Administrador);

export default Administrador
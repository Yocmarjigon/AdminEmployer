import { Sequelize, DataTypes } from "sequelize";
import { datasource } from "../config/database.js";


const  Empleados = datasource.define("empleados", {
  id : {
    type: DataTypes.UUID,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    nullable: false
  },
  direccion: {
    type: DataTypes.STRING,
    nullable: false
  },
  telefono: {
    type: DataTypes.STRING,
    nullable: false
  },
  correo: {
    type: DataTypes.STRING,
    unique: true,
},
  fechacontratacion: {
    type: DataTypes.DATE,
    nullable: false
  },
  departamento: {
    type: DataTypes.STRING,
    nullable: false
  },
  salario: {
    type: DataTypes.INTEGER,
    nullable: false
  },
  puesto: {
    type: DataTypes.STRING,
    nullable: false
  }
}, { timestamps: false, tableName: "empleados" });

export default Empleados
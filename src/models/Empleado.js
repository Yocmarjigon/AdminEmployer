import { Sequelize, DataTypes } from "sequelize";
import { datasource } from "../config/database.js";


const  Empleados = datasource.define("empleado", {
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
fechanacimiento: {
  type: DataTypes.DATE,
  nullable: false
},
nacionalidad: {
  type: DataTypes.STRING,
  nullable: false
}
, 
estadocivil: {
  type: DataTypes.ENUM("Soltero", "Casado"),
},
numeroid:{
  type: DataTypes.STRING,
  nullable: false
},
  fechacontratacion: {
    type: DataTypes.DATE,
    nullable: false
  },
  numeroempleado:{
    type: DataTypes.STRING,
    nullable: false
  },
  departamento: {
    type: DataTypes.STRING,
    nullable: false
  },
  cargo:{
    type: DataTypes.STRING,
    nullable: false
  },
  tipocontrato:{
    type: DataTypes.STRING,
    nullable: false
  },
  salario: {
    type: DataTypes.INTEGER,
    nullable: false
  }
}, { timestamps: false, tableName: "empleado" });

export default Empleados
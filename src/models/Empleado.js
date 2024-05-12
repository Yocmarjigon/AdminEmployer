import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("postgres://postgres:1234@localhost:5432/adminemployer");

const  Empleados = sequelize.define("empleados", {
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
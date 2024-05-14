import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("postgres://adminemployer_user:NMey6TCqL8LJR7Ae4ssr8t0GG5XVDe9R@dpg-cp0371njbltc73dmjl2g-a.oregon-postgres.render.com/adminemployer");

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
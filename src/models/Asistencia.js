import { DataTypes } from "sequelize";
import { datasource } from "../config/database.js";

const Asistencia = datasource.define("asistencia", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE,
        unique: true
    },
    hora_entrada: {
      type: DataTypes.TIME  
    },
    hora_salida: {
      type: DataTypes.TIME,
      nullable: false
    },
    horas_trabajadas: {
      type: DataTypes.FLOAT,
      nullable: false
    }
}, { timestamps: false, tableName: "asistencia" });

export default Asistencia
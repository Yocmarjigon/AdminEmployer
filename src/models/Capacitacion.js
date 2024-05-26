import { DataTypes } from "sequelize";
import { datasource } from "../config/database.js";

const Capacitacion = datasource.define("capacitacion", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        unique: true,
        nullable: false
    },
    descripcion: {
        type: DataTypes.STRING,
        nullable: false
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        nullable: false
    },
    fecha_fin: {
        type: DataTypes.TIME,
        nullable: false
    },
    institucion: {
        type: DataTypes.STRING,
        nullable: false
    }
}, { timestamps: false, tableName: "capacitacion" });

export default Capacitacion
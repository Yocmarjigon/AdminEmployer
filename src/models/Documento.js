import { DataTypes } from "sequelize";
import { datasource } from "../config/database.js";

const Documento = datasource.define("documento", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    tipo: {
        type: DataTypes.STRING,
        nullable: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        nullable: false
    },
    fecha_subida: {
        type: DataTypes.DATE,
        nullable: false
    },
    ruta_archivo: {
        type: DataTypes.STRING,
        nullable: false
    }
}, { timestamps: false, tableName: "documento" });

export default Documento
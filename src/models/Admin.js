import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("postgres://postgres:1234@localhost:5432/adminemployer");

const Admin = sequelize.define("admin", {
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


}, { timestamps: false, tableName: "admin" });

console.log(Admin === sequelize.models.Admin);

export default Admin
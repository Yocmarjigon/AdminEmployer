import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("postgres://adminemployer_user:NMey6TCqL8LJR7Ae4ssr8t0GG5XVDe9R@dpg-cp0371njbltc73dmjl2g-a.oregon-postgres.render.com/adminemployer");

const Admin = sequelize.define("admins", {
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

console.log(Admin === sequelize.models.Admin);

export default Admin
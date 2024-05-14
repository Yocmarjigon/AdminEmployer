import { Sequelize } from "sequelize";
import fs from 'node:fs';
const datasource = new Sequelize({
  host: "dpg-cp0371njbltc73dmjl2g-a.oregon-postgres.render.com",
  port: 5432,
  username: "adminemployer_user",
  password: "NMey6TCqL8LJR7Ae4ssr8t0GG5XVDe9R",
  dialect: "postgres",
  database: "adminemployer",
  ssl: true, 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
      
    }  
  }
  
})
const connection =  () => {
    datasource.authenticate().then(() => console.log("Connection has been established successfully.")).catch((error) => console.error("Unable to connect to the database:", error)).catch((error) => console.error("Unable to connect to the database:", error));
}

const generateTable = () => {
   sql` CREATE TABLE IF NOT EXISTS admin (id uuid default gen_random_uuid() primary key , email varchar not null unique,password varchar not null);`.then(() => console.log("done"));
   sql`CREATE TABLE IF NOT EXISTS empleador (id uuid default gen_random_uuid() primary key , nombre varchar not null, direccion varchar not null, telefono varchar not null, correo varchar not null, fechaContratacion date not null, departamento varchar not null, salario int not null, puesto varchar not null);`

};

export { connection, generateTable };

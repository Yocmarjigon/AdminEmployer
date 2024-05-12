import { Sequelize } from "sequelize";

const datasource = new Sequelize({
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  dialect: "postgres",
  database: "adminemployer",
})

const connection =  () => {
    datasource.authenticate().then(() => console.log("Connection has been established successfully.")).catch((error) => console.error("Unable to connect to the database:", error)).catch((error) => console.error("Unable to connect to the database:", error));
    console.log("Connection has been established successfully.");
}

const generateTable = () => {
   sql` CREATE TABLE IF NOT EXISTS admin (id uuid default gen_random_uuid() primary key , email varchar not null unique,password varchar not null);`.then(() => console.log("done"));
   sql`CREATE TABLE IF NOT EXISTS empleador (id uuid default gen_random_uuid() primary key , nombre varchar not null, direccion varchar not null, telefono varchar not null, correo varchar not null, fechaContratacion date not null, departamento varchar not null, salario int not null, puesto varchar not null);`

};

export { connection, generateTable };

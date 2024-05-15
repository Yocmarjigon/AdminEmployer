import { Sequelize } from "sequelize";

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


export { connection, generateTable };

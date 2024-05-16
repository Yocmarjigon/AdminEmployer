import { Sequelize } from "sequelize";

export const datasource = new Sequelize("postgres://adminemployer_user:NMey6TCqL8LJR7Ae4ssr8t0GG5XVDe9R@dpg-cp0371njbltc73dmjl2g-a.oregon-postgres.render.com/adminemployer?sslmode=require",{
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
    },
    rejectUnauthorized: false,
  },
  logging: false
});

const connection =  () => {
    datasource.authenticate().then(() => console.log("Connection has been established successfully.")).catch((error) => console.error("Unable to connect to the database:", error)).catch((error) => console.error("Unable to connect to the database:", error));
}


export { connection};

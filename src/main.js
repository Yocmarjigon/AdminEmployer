import express from "express";
import pc from "picocolors";
import { connection } from "./config/database.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsdoc from "./config/swagger.json" assert { type: "json" };
import routerAdmin from "./router/AdminRouter.js";
import routerEmpleado from "./router/EmpleadoRouter.js";

const app = express();
app.use(express.json());

connection();



app.use("/admin", routerAdmin);
app.use("/empleados", routerEmpleado);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerJsdoc))


app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
  next(err);
});
app.listen(3000, () =>
  console.log("Server running on port: " + pc.green("http://localhost:3000"))
);

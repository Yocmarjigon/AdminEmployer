import express from "express";
import pc from "picocolors";
import { connection } from "./config/database.js";
import routerAdmin from "./router/AdminRouter.js";
import routerEmpleado from "./router/EmpleadoRouter.js";
import "dotenv/config";
import routerDocumento from "./router/DocumentoRouter.js";

const app = express();
app.use(express.json());

connection();


app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
  next(err);
});

app.use("/admin", routerAdmin);
app.use("/empleados", routerEmpleado);
app.use("/documentos", routerDocumento);



app.listen(3000, () =>
  console.log("Server running on port: " + pc.green("http://localhost:3000"))
);

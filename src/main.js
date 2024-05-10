import express from "express";
import pc from "picocolors";
import { generateTable } from "./config/database.js";
import routerAdmin from "./router/AdminRouter.js";

const app = express();
app.use(express.json());

app.use("/admin", routerAdmin);

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
  next(err);
});
app.listen(3000, () => console.log("Server running on port: "+pc.green("http://localhost:3000")));
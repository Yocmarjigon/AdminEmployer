import express from "express";
import { _findAll, _create, _findById, _remove, _update } from "../controller/AdminController.js";

const routerAdmin = express.Router();

routerAdmin.get("/", _findAll);
routerAdmin.post("/", _create);
routerAdmin.get("/:id", _findById);
routerAdmin.delete("/:id", _remove);
routerAdmin.put("/:id", _update);
export default routerAdmin;

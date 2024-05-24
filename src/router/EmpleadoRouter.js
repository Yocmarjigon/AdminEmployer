import { Router } from "express";
import { _create, _findAll, _findById, _remove, _update } from "../controller/EmpleadoController.js";
import { empleadoValidators } from "../config/validatorField.js";

const routerEmpleado = Router();

routerEmpleado.get("/", _findAll);
routerEmpleado.post("/", empleadoValidators,_create);
routerEmpleado.get("/:id", _findById);
routerEmpleado.delete("/:id", _remove);
routerEmpleado.put("/:id", _update);

export default routerEmpleado
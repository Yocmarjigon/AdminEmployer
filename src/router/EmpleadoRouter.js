import { Router } from "express";
import { _create, _findAll } from "../controller/EmpleadoController.js";
import { empleadoValidators } from "../config/validatorField.js";
const routerEmpleado = Router();
routerEmpleado.get("/", _findAll);
routerEmpleado.post("/", empleadoValidators,_create);

export default routerEmpleado
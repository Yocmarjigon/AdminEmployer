import { Router } from "express";
import { _findAll } from "../controller/DocumentoController.js";

const routerDocumento = Router();

routerDocumento.get("/", _findAll);

export default routerDocumento;
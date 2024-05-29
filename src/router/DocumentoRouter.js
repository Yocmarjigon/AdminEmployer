import { Router } from "express";
import { _create, _findAll } from "../controller/DocumentoController.js";
import multer from "multer";
import { uploadMiddleware } from "../config/filterFile.js";



const routerDocumento = Router();

routerDocumento.get("/", _findAll);
routerDocumento.post("/", uploadMiddleware, _create);

export default routerDocumento;
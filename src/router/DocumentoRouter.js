import { Router } from "express";
import { _create, _findAll } from "../controller/DocumentoController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const routerDocumento = Router();

routerDocumento.get("/", _findAll);
routerDocumento.post("/", upload.single("file"), _create);

export default routerDocumento;
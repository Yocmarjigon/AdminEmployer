import multer from "multer";
import { create, findAll } from "../services/DocumentoService.js";
import { documentoSchema } from "../schema/DocumentoSchema.js";


const _findAll = async (req, res) => {
    const result = await findAll();
    res.send(result);
}

const _create = async (req, res) => {
    const body = documentoSchema.safeParse(req.body);
    
    if (body.error) {
        return res.status(400).json({ errors: body });
    }
    const result = await create(body.data, req.file);
    res.send({ message: "Documento creado correctamente", result: result });
    
}

export { _findAll, _create };


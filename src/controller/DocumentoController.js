import { findAll } from "../services/DocumentoService.js";

const _findAll = async (req, res) => {
    const result = await findAll();
    res.send(result);
}

export { _findAll }


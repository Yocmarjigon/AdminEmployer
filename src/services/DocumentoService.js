import Documento from "../models/Documento.js";

async function findAll() {
    const documento = await Documento.findAll();
    return documento;
}

export { findAll }
import Documento from "../models/Documento.js";

async function findAll() {
    const documento = await Documento.findAll();
    return documento;
}

async function findById(id) {
    const documento = await Documento.findByPk(id);
    return documento;
}

async function create(data, file) {

    const { path, originalname } = file

    data.ruta_archivo = path
    data.tipo = originalname.split(".")[1]
    data.fecha_subida = new Date();
        
    const documento = await Documento.create(data);

    return documento;
}

async function remove(id) {
    const documento = await Documento.destroy({ where: { id } });
    return documento;
}

async function update(id, data) {
    const documento = await Documento.update({...data}, { where: { id } });
    return documento;
}

export { findAll, findById, create, remove, update };
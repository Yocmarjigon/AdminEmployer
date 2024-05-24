import Admin from "../models/Admin.js";

async function findAll() {
  try {
    const result = await Admin.findAll();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function findById(id) {
  try {
    const result = await Admin.findByPk(id);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function create(data) {
  return await Admin.create(data);
}

async function remove(id) {
  try {
    const result = await Admin.destroy({ where: { id } });
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function update(id, data) {
  try {
    const result = await Admin.update(
      {
        nombre: data.nombre,
        correo: data.correo,
        contrasenia: data.contrasenia,
      },
      { where: { id } }
    );

    return result;
  } catch (error) {
    console.log(error);
  }
}

export { findAll, create, findById, remove, update };

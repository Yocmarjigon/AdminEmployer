import Empleados from "../models/Empleado.js";

async function findAll() {
  const empleo = await Empleados.findAll();
  return empleo;
}

async function findById(id) {
  const result = await Empleados.findByPk(id);
  return result;
}
async function create(data) {
  const result = await Empleados.create(data);
  return result;
}

async function remove(id) {
  const result = await Empleados.destroy({ where: { id } });
  return result;
}

async function update(id, data) {
  console.log(data);
  const result = await Empleados.update({...data}, { where: { id } });
  return result;
}
export { findAll, findById, create, remove, update };

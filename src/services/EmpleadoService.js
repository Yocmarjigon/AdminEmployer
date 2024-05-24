import Empleados from "../models/Empleado.js";

async function findAll() {
  try {
    const empleo = await Empleados.findAll();
    return empleo;
  } catch (error) {
    console.log(error);
  }
}

async function findById(id) {
  try {
    const result = await Empleados.findByPk(id);
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function create(empleo) {
  try {
    const result = await Empleados.create({nombre:empleo.nombre, direccion:empleo.direccion, telefono:empleo.telefono, correo:empleo.correo, fechacontratacion:empleo.fechacontratacion, departamento:empleo.departamento, salario:empleo.salario, puesto:empleo.puesto});
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function remove(id) {
  try {
    const result = await Empleados.destroy({ where: { id } });
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function update(id, empleado) {
  try {
    const result = await Empleados.update(empleado, { where: { id } });
  }catch(error){
    console.log(error);
  }
}
export { findAll, findById, create, remove, update };

import  Empleados from "../models/Empleado.js";



async function findAll() {
 const empleo = await Empleados.findAll();
 return empleo;
}

async function findById(id) {

}
async function create(empleo) {

}

async function remove(id) {

}

async function update(id, empleado) {

}
export { findAll, findById, create, remove, update }
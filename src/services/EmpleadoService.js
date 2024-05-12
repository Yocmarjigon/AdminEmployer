import { sql } from "../config/database.js";

async function findAll() {
  return await sql`SELECT * FROM empleados`;
}

async function findById(id) {
  try{
  return await sql`SELECT * FROM empleados WHERE id = ${id}`;
  }catch(error){
    console.log(error);
  }
}
async function create(empleo) {
  try{
return await sql`
  INSERT INTO empleados 
  (
    nombre,
    direccion,
    telefono,
    correo, 
    fechaContratacion,
    departamento,
    salario,
    puesto
)VALUES (
  ${empleo.nombre}, 
  ${empleo.direccion},
  ${empleo.telefono},
  ${empleo.correo},
  ${empleo.fechaContratacion}, 
  ${empleo.departamento},
  ${empleo.salario},
  ${empleo.puesto}
  )
  `;
  return empleo;
  }catch(error){
    console.log(error);
  }
  
}

async function remove(id) {
  try{
  return await sql`DELETE FROM empleados WHERE id = ${id}`;
  }catch(error){
    console.log(error);
  }
}

async function update(id, empleado) {
const findEmpleado = await sql`SELECT * FROM empleados WHERE id = ${id}`;
try{
  const { nombre, direccion, telefono, correo, fechaContratacion, departamento, salario, puesto } = findEmpleado[0];

  if (!findEmpleado.length === 0) {
    await sql`
    UPDATE empleados SET
    nombre = ${empleado.nombre ? empleado.nombre : nombre},
    direccion = ${empleado.direccion ? empleado.direccion : direccion},
    telefono = ${empleado.telefono ? empleado.telefono : telefono},
    correo = ${empleado.correo ? empleado.correo : correo},
    fechaContratacion = ${empleado.fechaContratacion ? empleado.fechaContratacion : fechaContratacion},
    departamento = ${empleado.departamento  ? empleado.departamento : departamento},
    salario = ${empleado.salario ? empleado.salario : salario},
    puesto = ${empleado.puesto ? empleado.puesto : puesto}
    WHERE id = ${id}
    `;  
  }
  return findEmpleado;  
}catch(error){
  console.log(error);
}
}
export { findAll, findById, create, remove, update }
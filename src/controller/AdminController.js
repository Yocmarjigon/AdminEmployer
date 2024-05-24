import { validationResult } from "express-validator";
import { HttpResponse } from "../errors/CustomError.js";
import { findAll, create, findById, remove, update } from "../services/AdminService.js";
import Admin from "../models/Admin.js";

/* 
Este controlador se encarga de enviar una lista de todos los administradores
registrados en la base de datos.
-------------------------------------------------------------------------------------->
 */

const _findAll = async (req, res) => {
  const result = await findAll();
  res.send(result);
};
//-------------------------------------------------------------------------------------->

/* 
  Este controlador envía al cliente un administrador por su id.
  Si el administrador no existe, se envía un mensaje de error al cliente.
 */
const _findById = async (req, res) => {
  const result = await findById(req.params.id);
  console.log(result === null);
  if (result === null) {
    return HttpResponse.NotFound(res, `No existe el administrador con el id: ${req.params.id}`);
  }
  res.send(result);
};
//-------------------------------------------------------------------------------------->

/* 
  El controlador crea un nuevo administrador en la base de datos.
  El administrador debe tener un correo y una contraseña.
  Si el administrador ya existe, se envía un mensaje de error al cliente.
 */
const _create = async (req, res) => {
  const { email, password } = req.body;
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const result = await create({ email, password });
    res.send({ message: "Administrador creado correctamente", result: result });
  } catch (error) {
    if (error.code === "23505") {
      return HttpResponse.UniqueViolation(res, "El administrador ya existe con el email: " + email);
    }
    console.log(error);
  }
};
//-------------------------------------------------------------------------------------->

/* 
  Este constrolador elimina un administrador de la base de datos.
  Si el administrador no existe, se envia un mensaje de error al cliente.
 */

const _remove = async (req, res) => {
  try {
    const result = await remove(req.params.id);

    if (result === 0) {
      return HttpResponse.NotFound(res, `El administrador con el id: ${req.params.id} no existe`);
    }
    res.send({ message: "Admin deleted", result: result });
  } catch (error) {
    console.log(error);
  }
};
//-------------------------------------------------------------------------------------->

/* 
  Este constrolador actualiza un administrador de la base de datos.
 */
const _update = async (req, res) => {
  const { email, password } = req.body;
  const result = await update(req.params.id, Admin.build({ email, password }));
  if (result === 0) {
    return HttpResponse.NotFound(res, "El administrador no existe");
  }
  res.send({ message: "Administrador actualizado correctamente", result: result });
}


export { _findAll, _create, _findById, _remove, _update };

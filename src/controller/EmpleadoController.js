import { HttpResponse } from "../errors/CustomError.js";
import { validationResult } from "express-validator";
import {
  findAll,
  findById,
  create,
  remove,
  update,
} from "../services/EmpleadoService.js";
import Empleados from "../models/Empleado.js";

const _findAll = async (req, res) => {
  const result = await findAll();
  res.send(result);
};

const _findById = async (req, res) => {
  const result = await findById(req.params.id);
  console.log(result.length);
  if (result.length === 0) {
    return HttpResponse.NotFound(res, "No existe el empleado");
  }
  res.send(result);
};

const _create = async (req, res) => {
  const {
    nombre,
    direccion,
    telefono,
    correo,
    fechacontratacion,
    departamento,
    salario,
    puesto,
  } = req.body;

  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const result = await create(
      Empleados.build({
        nombre,
        direccion,
        telefono,
        correo,
        fechacontratacion,
        departamento,
        salario,
        puesto,
      })
    );

    res.send({ message: "Empleado creado correctamente", result: result });
  } catch (error) {
    if (error.code === "23505") {
      return HttpResponse.UniqueViolation(res, "El Empleado ya existe con el correo: " + correo);
    }
    console.log(error);
  }
};


const _remove = async (req, res) => {
  try {
    const result = await remove(req.params.id);
    if(result === 0){
      return HttpResponse.NotFound(res, "No existe el Empleado");
    }
    res.send({ message: "Empleado eliminado", result: result });
    
  } catch (error) {
    console.log(error);
  }
}

const _update = async (req, res) => {
  try {
    const result = await update(req.params.id, req.body);
  }catch(error){
    console.log(error);
  }
}

export { _findAll, _findById, _create, _remove, _update };

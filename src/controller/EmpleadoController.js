import { HttpResponse } from "../errors/CustomError.js";
import { validationResult } from "express-validator";
import {
  findAll,
  findById,
  create,
  remove,
  update,
} from "../services/EmpleadoService.js";

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
    fechaContratacion,
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
      new Empleado(
        nombre,
        direccion,
        telefono,
        correo,
        fechaContratacion,
        departamento,
        salario,
        puesto
      )
    );

    res.send({ message: "Empleado creado correctamente", result: result });
  } catch (error) {
    if (error.code === "23505") {
      return HttpResponse.UniqueViolation(res, "El Empleado ya existe con el correo: " + correo);
    }
    console.log(error);
  }
};

export { _findAll, _findById, _create };

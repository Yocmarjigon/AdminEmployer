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
import {
  empleadosSchema,
  empleadosSchemaUpdate,
} from "../schema/EmpleadoSchema.js";

const _findAll = async (req, res) => {
  const result = await findAll();
  res.send(result);
};

const _findById = async (req, res) => {
  const result = await findById(req.params.id);

  if (result === null) {
    return HttpResponse.NotFound(res, "No existe el empleado");
  }
  res.send(result);
};

const _create = async (req, res) => {
  const { correo } = req.body;
  try {
    const body = empleadosSchema.safeParse(req.body);

    if (body.error) {
      return res.status(400).json({ errors: body });
    }

    const result = await create(body.data);

    res.send({ message: "Empleado creado correctamente", result: result });
  } catch (error) {
    if (error.parent.code === "23505") {
      return HttpResponse.UniqueViolation(
        res,
        "El Empleado ya existe con el correo: " + correo
      );
    }
    console.log(error);
  }
};

const _remove = async (req, res) => {
  try {
    const result = await remove(req.params.id);
    console.log(result);
    if (result === 0) {
      return HttpResponse.NotFound(res, "No existe el Empleado");
    }
    res.send({ message: "Empleado eliminado", result: result });
  } catch (error) {
    console.log(error);
  }
};

const _update = async (req, res) => {
  try {
    const body = empleadosSchemaUpdate.safeParse(req.body);

    if (body.error) {
      return res.status(400).json({ errors: body });
    }

    const result = await update(req.params.id ,body.data);
  ;console.log(result);
    if (result[0] === 0) {
      return HttpResponse.NotFound(res, "El Empleado no existe");
    }
    res.send({ message: "Empleado actualizado", result: result });
  } catch (error) {
    console.log(error);
  }
};

export { _findAll, _findById, _create, _remove, _update };

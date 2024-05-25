import { HttpResponse } from "../errors/CustomError.js";
import {
  findAll,
  create,
  findById,
  remove,
  update,
} from "../services/AdminService.js";
import { adminSchema, adminSchemaUpdate } from "../schema/AdminSchema.js";



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
  
  if (result === null) {
    return HttpResponse.NotFound(
      res,
      `No existe el administrador con el id: ${req.params.id}`
    );
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
  const { nombre, correo, contraseña } = req.body;
  try {
    const body = adminSchema.safeParse({ nombre, correo, contraseña });

    if (body.error) {
      return res.status(400).json({ errors: body });
    }

    const result = await create(body.data);
    res.send({ message: "Administrador creado correctamente", result: result });
  } catch (error) {
    if (error.parent.code === "23505") {
      console.log(error);
      return HttpResponse.UniqueViolation(
        res,
        "El administrador ya existe con el email: " + correo
      );
    
    }
    res.status(500).json({ error: "Ha ocurrido un error en el servidor" });
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
      return HttpResponse.NotFound(
        res,
        `El administrador con el id: ${req.params.id} no existe`
      );
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
  try{
    const { nombre, correo, contraseña } = req.body;
  
    const body = adminSchemaUpdate.safeParse({ nombre, correo, contraseña });
    if (body.error) {
      return res.status(400).json({ errors: body });
    }
  
    const result = await update(req.params.id, body.data);
    
    if (result[0] === 0) {
      return HttpResponse.NotFound(res, "El administrador no existe");
    }
    
    res.send({
      message: "Administrador actualizado correctamente",
      result: result,
    });
  }catch(error){
    console.log(error);
  }
  
};

export { _findAll, _create, _findById, _remove, _update };

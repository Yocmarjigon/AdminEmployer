
import zod from "zod";
const adminSchemaUpdate = zod.object({
  nombre: zod.string("El nombre debe ser un string").nullable().optional(),
  correo: zod.string("El correo debe ser un string").email("El correo es requerido").nullable().optional(),
  contraseña: zod.string("La contraseña debe ser un string").nullable().optional(),
})

export { adminSchemaUpdate }
import zod from "zod";

const adminSchema = zod.object({
  nombre: zod.string("El nombre debe ser un string").min(1, "El nombre es requerido"),
  correo: zod.string("El correo debe ser un string").email("El correo es requerido"),
  contraseña: zod.string("La contraseña debe ser un string").min(4, "La contraseña es requerida"),
});
const adminSchemaUpdate = zod.object({
  nombre: zod.string("El nombre debe ser un string").nullable().optional(),
  correo: zod.string("El correo debe ser un string").email("El correo es requerido").nullable().optional(),
  contraseña: zod.string("La contraseña debe ser un string").nullable().optional(),
})


export {
  adminSchema,
  adminSchemaUpdate
}
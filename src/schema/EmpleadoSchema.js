import zod from "zod";

const empleadosSchema = zod.object({
  nombre: zod
    .string("El nombre debe ser un string")
    .min(1, "El nombre es requerido"),
  correo: zod
    .string("El correo debe ser un string")
    .email("El correo es requerido"),
  direccion: zod
    .string("La direccion debe ser un string")
    .min(1, "La direccion es requerida"),
  telefono: zod
    .string("El telefono debe ser un string")
    .min(1, "El telefono es requerido"),
  fechanacimiento: zod.string("La fecha de nacimiento debe ser una fecha"),

  fechacontratacion: zod.string("La fecha de contratacion debe ser una fecha"),

  nacionalidad: zod
    .string("La nacionalidad debe ser un string")
    .min(1, "La nacionalidad es requerida"),
  estadocivil: zod
    .string("El estado civil debe ser un string")
    .min(1, "El estado civil es requerido"),
  numeroid: zod
    .string("El numero de identidad debe ser un string")
    .min(1, "El numero de identidad es requerido"),
  numeroempleado: zod
    .string("El numero de empleado debe ser un string")
    .min(1, "El numero de empleado es requerido"),
  departamento: zod
    .string("El departamento debe ser un string")
    .min(1, "El departamento es requerido"),
  cargo: zod
    .string("El cargo debe ser un string")
    .min(1, "El cargo es requerido"),
  tipocontrato: zod
    .string("El tipo de contrato debe ser un string")
    .min(1, "El tipo de contrato es requerido"),
  salario: zod
    .number("El salario debe ser un numero")
    .min(1, "El salario es requerido")
});

const empleadosSchemaUpdate = zod.object({
  nombre: zod
    .string("El nombre debe ser un string")
    .min(1, "El nombre es requerido").nullable().optional(),
  correo: zod
    .string("El correo debe ser un string")
    .email("El correo es requerido").nullable().optional(),
  direccion: zod
    .string("La direccion debe ser un string")
    .min(1, "La direccion es requerida").nullable().optional(),
  telefono: zod
    .string("El telefono debe ser un string")
    .min(1, "El telefono es requerido").nullable().optional(),
  fechanacimiento: zod.string("La fecha de nacimiento debe ser una fecha").nullable().optional(),

  fechacontratacion: zod.string("La fecha de contratacion debe ser una fecha").nullable().optional(),

  nacionalidad: zod
    .string("La nacionalidad debe ser un string")
    .min(1, "La nacionalidad es requerida").nullable().optional(),
  estadocivil: zod
    .string("El estado civil debe ser un string")
    .min(1, "El estado civil es requerido").nullable().optional(),
  numeroid: zod
    .string("El numero de identidad debe ser un string")
    .min(1, "El numero de identidad es requerido").nullable().optional(),
  numeroempleado: zod
    .string("El numero de empleado debe ser un string")
    .min(1, "El numero de empleado es requerido").nullable().optional(),
  departamento: zod
    .string("El departamento debe ser un string")
    .min(1, "El departamento es requerido").nullable().optional(),
  cargo: zod
    .string("El cargo debe ser un string")
    .min(1, "El cargo es requerido").nullable().optional(),
  tipocontrato: zod
    .string("El tipo de contrato debe ser un string")
    .min(1, "El tipo de contrato es requerido").nullable().optional(),
  salario: zod
    .number("El salario debe ser un numero")
    .min(1, "El salario es requerido").nullable().optional()
});

export { empleadosSchema, empleadosSchemaUpdate };

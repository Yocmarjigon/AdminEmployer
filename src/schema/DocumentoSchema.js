import zod from "zod";

const documentoSchema = zod.object({
    tipo: zod.string("El tipo debe ser un string").min(1, "El tipo es requerido").nullable().optional(),
    descripcion: zod
        .string("La descripción debe ser un string")
        .min(1, "La descripción es requerida"),
    fecha_subida: zod
        .date("La fecha de subida debe ser una fecha").nullable().optional(),
    ruta_archivo: zod
        .string("La ruta del archivo debe ser un string")
        .min(1, "La ruta del archivo es requerida").nullable().optional(),
})

export { documentoSchema }
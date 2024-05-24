import { body } from "express-validator"

const adminValidators =[
  body("email").isEmail().withMessage("El correo no es valido"),
  body("password").isString().withMessage("La contraseña no es valida"),
]

const empleadoValidators =[
  body("nombre").isString().withMessage("El nombre no es valido"),
  body("direccion").isString().withMessage("La direccion no es valida"),
  body("telefono").isString().withMessage("El telefono no es valido"),
  body("correo").isEmail().withMessage("El correo no es valido"),
  body("fechacontratacion").isString().withMessage("La fecha de contratacion no es valida"),
  body("departamento").isString().withMessage("El departamento no es valido"),
  body("salario").isNumeric().withMessage("El salario no es valido"),
  body("puesto").isString().withMessage("El puesto no es valido"),
]

export {
  adminValidators,
  empleadoValidators
}
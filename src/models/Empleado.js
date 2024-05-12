export default class Empleado {
  nombre;
  direccion;
  telefono;
  correo;
  fechaContratacion;
  departamento;
  salario;
  puesto;
  constructor(nombre, direccion, telefono, correo, fechaContratacion, departamento, salario, puesto) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.correo = correo;
    this.fechaContratacion = fechaContratacion;
    this.departamento = departamento;
    this.salario = salario;
    this.puesto = puesto;
  }
}

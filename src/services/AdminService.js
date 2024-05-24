import Admin from "../models/Admin.js";

async function findAll() {
  try {
    const result = await Admin.findAll();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function findById(id) {
  try {
    const result = await Admin.findByPk(id);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function create(email, password) {
  try {
    return await Admin.create(email, password);
  } catch (error) {
    if (error.code === "23505") {
      return HttpResponse.UniqueViolation(
        res,
        "El administrador ya existe con el email: " + email
      );
    }
    console.log(error);
  }
}
async function remove(id) {
  try {
    const result = await Admin.destroy({ where: { id } });
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function update(id, admin) {
  try {
    const result = await Admin.update({email: admin.email, password: admin.password}, { where: {id}});;
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
}

export { findAll, create, findById, remove, update };

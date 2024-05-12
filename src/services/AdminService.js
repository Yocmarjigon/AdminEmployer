import Admin from "../models/Admin.js"; 


async function findAll() {
  const admin = await Admin.findAll();
  return admin
}

async function findById(id) {
  
  
}

async function create(email, password) {

  return await Admin.create(email, password);
}
async function remove(id) {
  
}

async function update(id, admin) {

  
}

export { findAll, create, findById, remove, update };

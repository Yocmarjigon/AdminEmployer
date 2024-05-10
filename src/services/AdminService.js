import { sql } from "../config/database.js"
import Admin from "../models/Admin.js";

async function findAll() {
 return await sql`SELECT * FROM admin`;
}

async function findById(id) {
 return await sql`SELECT * FROM admin WHERE id = ${id}`
}

async function create(admin) {
 return await sql`INSERT INTO admin (email, password) VALUES (${admin.email}, ${admin.password})`;
}
async function remove(id) {
  return await sql`DELETE FROM admin WHERE id = ${id}`
}

export {
  findAll,
  create,
  findById,
  remove
}
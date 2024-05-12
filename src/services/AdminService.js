import { sql } from "../config/database.js";
import Admin from "../models/Admin.js";

async function findAll() {
  try {
  return await sql`SELECT * FROM admin`;
  } catch (error) {
    console.log(error);
  }
}

async function findById(id) {
  try {
    return await sql`SELECT * FROM admin WHERE id = ${id}`;  
  } catch (error) {
    console.log(error);
  } 
  
}

async function create(admin) {
  try {
  return await sql`INSERT INTO admin (email, password) VALUES (${admin.email}, ${admin.password})`;
  } catch (error) {
    console.log(error);
  }
}
async function remove(id) {
  try {
  return await sql`DELETE FROM admin WHERE id = ${id}`;
  } catch (error) {
    console.log(error);
  }
}

async function update(id, admin) {

  const findAdmin = await sql`SELECT * FROM admin WHERE id = ${id}`;
  try {
  if (!findAdmin.length === 0) {
    const { email, password } = findAdmin[0];
    await sql`
    UPDATE admin SET
      email = ${admin.email ? admin.email : email},
      password = ${admin.password ? admin.password : password}
      WHERE id = ${id}
      `;
  }
} catch (error) {
  console.log(error);
}
  return findAdmin;
}

export { findAll, create, findById, remove, update };

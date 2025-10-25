import db from "../db.js";

export const getAllUsers = async () => {
  const [rows] = await db.query("SELECT * FROM usuario");
  return rows;
};

import db from "../db.js";

export const getAllUsers = async () => {
  const [rows] = await db.query("SELECT * FROM usuario");
  return rows;
};

export const insertUser = async (user) => {
  const { nome_usuario, email_usuario } = user;

  const [result] = await db.query(
    "INSERT INTO usuario (nome_usuario, email_usuario) VALUES (?, ?)",
    [nome_usuario, email_usuario]
  );

  return result.insertId;
};

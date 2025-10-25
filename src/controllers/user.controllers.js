import { getAllUsers, insertUser } from "../models/user.models.js";

export const listUsers = async (req, res) => {
  try {
    const usuarios = await getAllUsers();
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { nome_usuario, email_usuario } = req.body;

    if (!nome_usuario || !email_usuario) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }

    const id = await insertUser({
      nome_usuario,
      email_usuario,
    });

    res.status(200).json({ message: "Usuário criado com sucesso", id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

import db from "../db.js";

export const getAllTasks = async () => {
  const [rows] = await db.query("SELECT * FROM tarefa");
  return rows;
};

export const insertTask = async (task) => {
  const {
    id_usuario_tarefa,
    descricao_tarefa,
    setor_tarefa,
    prioridade_tarefa,
    status_tarefa,
  } = task;

  const [result] = await db.query(
    "INSERT INTO tarefa (id_usuario, descricao_tarefa, setor_tarefa, cadastro_tarefa, prioridade_tarefa, status_tarefa) VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?, ?)",
    [
      id_usuario_tarefa,
      descricao_tarefa,
      setor_tarefa,
      prioridade_tarefa,
      status_tarefa,
    ]
  );

  return result.insertId;
};

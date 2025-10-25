import {
  getAllTasks,
  insertTask,
  deleteTaskById,
  editTaskById
} from "../models/task.models.js";

export const listTasks = async (req, res) => {
  try {
    const tarefas = await getAllTasks();
    res.json(tarefas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

export const createTask = async (req, res) => {
  try {
    const {
      id_usuario_tarefa,
      descricao_tarefa,
      setor_tarefa,
      prioridade_tarefa,
      status_tarefa,
    } = req.body;

    if (
      !id_usuario_tarefa ||
      !descricao_tarefa ||
      !setor_tarefa ||
      !prioridade_tarefa ||
      !status_tarefa
    ) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }

    const id = await insertTask({
      id_usuario_tarefa,
      descricao_tarefa,
      setor_tarefa,
      prioridade_tarefa,
      status_tarefa,
    });

    res.status(200).json({ message: "Tarefa criada com sucesso", id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Preencha o id" });
    }
    const affectedRows = await deleteTaskById(id);

    if (affectedRows == 0) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    return res.status(200).json({ message: "Tarefa deletada com suceso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

export const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Preencha o id" });
    }
    const { descricao_tarefa, setor_tarefa, prioridade_tarefa, status_tarefa } = req.body;
    if (
      !descricao_tarefa ||
      !setor_tarefa ||
      !prioridade_tarefa ||
      !status_tarefa
    ) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }

    const affectedRows = await editTaskById(id, {
      descricao_tarefa,
      setor_tarefa,
      prioridade_tarefa,
      status_tarefa,
    });

    if (affectedRows > 0) {
      return res.status(200).json({ message: "Tarefa atualizada com sucesso" });
    } else {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

import { Router } from "express";
import { listTasks, createTask, deleteTask, editTask } from "../controllers/task.controllers.js";

const router = Router();

router.get("/", listTasks);
router.post("/create", createTask);
router.delete("/delete/:id", deleteTask);
router.put("/edit/:id", editTask);

export default router;

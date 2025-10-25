import { Router } from "express";
import { listTasks, createTask, deleteTask } from "../controllers/task.controllers.js";

const router = Router();

router.get("/", listTasks);
router.post("/create", createTask);
router.delete("/delete/:id", deleteTask);

export default router;

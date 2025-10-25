import { Router } from "express";
import { listTasks, createTask } from "../controllers/task.controllers.js";

const router = Router();

router.get("/", listTasks);
router.post("/create", createTask);

export default router;

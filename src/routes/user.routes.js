import { Router } from "express";
import { listUsers } from "../controllers/user.controllers.js";

const router = Router();

router.get("/", listUsers);

export default router;

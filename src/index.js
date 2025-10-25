import express from "express";
import userRoutes from "./routes/user.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(express.json());
app.use(express.static("./public"));

const PORT = 3333;

app.use("/users", userRoutes);
app.use("/tasks", tasksRoutes);

app.listen(PORT, () => {
  console.log(`Backend running in http://localhost:${PORT}`);
});

export default app;

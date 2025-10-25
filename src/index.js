import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("./public"));

const PORT = 3333;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Backend running in http://localhost:${PORT}`);
});

export default app;

import express from "express";

const app = express();

app.use(
  session({
    secret: "SaepMan",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
    },
  })
);

app.use(express.json());
app.use(express.static("./public"));

const PORT = 3333;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Backend running in http://localhost:${PORT}`);
});

export default app;

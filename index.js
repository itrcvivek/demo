import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello, World! i m index-js");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;

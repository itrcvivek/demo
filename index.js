
// import express from "express";
const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello, World! i m index-js");
});
const port = 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// export default app;

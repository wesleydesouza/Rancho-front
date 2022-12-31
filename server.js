const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const { resolve } = require("path");

app.use("/", express.static(resolve(__dirname, "./tsc && vite build")));

app.listen(PORT, () =>
  console.log(`Servidor iniciado em http://localhost:${PORT}`)
);

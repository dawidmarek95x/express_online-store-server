const express = require('express');
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
})

app.use((req, res, next) => {
  console.log("In the another middleware");
  res.send('<h1>Hello from Express.js</h1>');
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
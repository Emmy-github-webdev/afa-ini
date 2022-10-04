const express = require("express");
const connectDB = require('./config/db')
const app = express();

connectDB();

app.use(express.json({extended: false}))

app.get("/", (req, res) => {
  res.send("Welcome to Afara initiative project");
});

app.use('api/users', require('./routes/api/users'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
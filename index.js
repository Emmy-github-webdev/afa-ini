const express = require("express");
const connectDB = require('./config/db');
const userRoutes = require('./routes/api/users');
const TestRoutes = require('./routes/api/testRoute');
const app = express();

connectDB();

app.use(express.json({extended: false}))

app.get("/", (req, res) => {
  res.send("Welcome to Afara initiative project");
});

app.use('/api/test', TestRoutes)
app.use('/api/register', userRoutes)
app.use('/api/scores', userRoutes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const todoRouter = require('./routes/todo.routes');

app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/api/todos', todoRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/mongoose.config');
dotenv.config();
connectDb();

const app = express();

const todoRouter = require('./routes/todo.routes');
const userRouter = require('./routes/user.routes');

app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/api/todos', todoRouter);
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
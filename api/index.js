const express = require('express');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
const categoriesRoute = require('./routes/categories');

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log('Connect To MongoDB'.cyan.bold))
  .catch((error) => console.log(error));

app.use('/api/auth', authRoute);

app.listen('5000', () => {
  console.log('Backend is running'.yellow.bold);
});

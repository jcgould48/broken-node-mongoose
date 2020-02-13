const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const User = require('./models/Users');

require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => console.log(`Mongo Error: ${err}`));

  const port =process.env.PORT || 300;
  const userRoutes = require('./routes/userRoute');
  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

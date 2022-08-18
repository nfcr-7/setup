const express = require('express');
const app = express();
const db = require('./src/config/db');
const env = require('./src/config/env');
const customerRoutes = require('./src/routers/customer');

db.connect((err) => {
  if (err) {
    console.log('Db connection error' + err);
    return;
  }
  console.log('db connected!');
});

app.use('/api/customer', customerRoutes);

app.listen(env.port, () => {
  console.log(`Server up and running on port ${env.port}`);
});

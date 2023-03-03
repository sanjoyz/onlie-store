require('dotenv').config();
const express = require('express');
const sequilize = require('./db');
const models = require('./models/models');
const cors = require('cors'); // requests from browser
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json()); // for json parsing
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// error handler, last middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequilize.authenticate(); // connection to db
    await sequilize.sync(); // sync db state and db schema
    app.listen(PORT, () => console.log(`server listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

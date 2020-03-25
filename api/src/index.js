const express = require('express');
const routes = require('./routes');
const cors = require('cors');


// using express like route manager
const app = express();

app.use(cors());
// express understanding JSON
app.use(express.json());

app.use(routes);

app.listen(3333);
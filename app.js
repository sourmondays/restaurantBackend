const express = require('express');
const logger = require('morgan');
const app = express();
const cors = require("cors");

app.use(require("cors")());

app.use(
    cors({
        origin: ["http://localhost:4000"],
        credentials: true
    })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));

module.exports = app;

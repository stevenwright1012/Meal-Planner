require('dotenv').config
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(3006, console.log("Listening on 3006"))
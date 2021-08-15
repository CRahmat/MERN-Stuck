const express = require('express');
const app = express();
const contentRouter = require('./routes/contents')

app.use('/', contentRouter);
app.listen(4000);
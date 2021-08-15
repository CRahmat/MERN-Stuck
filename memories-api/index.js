const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const contentRouter = require('./routes/contents')

app.use(bodyParser.json());

/*Agar API dapat dihit dari URL manapun selain localhost*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/', contentRouter);
app.listen(4000);
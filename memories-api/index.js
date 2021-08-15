const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const contentRouter = require('./routes/contents')
const authRouter = require('./routes/auth')

app.use(bodyParser.json());

/*Agar API dapat dihit dari URL manapun selain localhost*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/v1/contents', contentRouter);
app.use('/v1/auth', authRouter);
app.listen(4000);
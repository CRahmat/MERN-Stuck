const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const contentRouter = require('./routes/contents');
const authRouter = require('./routes/auth');

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
app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const errorMessage = error.message;
    const data = error.data;
    res.status(status).json({message: errorMessage, data: data});
});

mongoose.connect('mongodb+srv://catur:<lDA1cBjfKrOMLEzd>@clustermernblog.7eara.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => {
    app.listen(4000, () => console.log('Connection Successfully'));
})
.catch(err => console.log(err));

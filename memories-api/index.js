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

mongoose.connect("mongodb://catur:lDA1cBjfKrOMLEzd@clustermernblog-shard-00-00.7eara.mongodb.net:27017,clustermernblog-shard-00-01.7eara.mongodb.net:27017,clustermernblog-shard-00-02.7eara.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-wm0b6u-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(4000)
})
.catch(err => console.log(err));
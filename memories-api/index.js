const express = require('express');

const app = express();

app.use(() => {
    console.log('Server Ready');
});

app.listen(4000);
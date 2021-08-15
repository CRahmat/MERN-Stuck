const express = require('express');

const app = express();

const router = express.Router();

router.get('/details', (req, res, next) => {
    res.json({title:"Title Blog", 
    author:"Catur Rahmat", 
    date:"15 Agustus 2021", 
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."});
    next();
});
router.use('/account', (req, res, next) => {
    res.json({email:"caturrahmat.ctrmt@gmail.com", 
    fullName:"Catur Rahmat", 
    birthDay:"8 Oktober 2000"});
    next();
});
app.use('/', router);
app.listen(4000);
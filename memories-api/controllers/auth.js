exports.register = (req, res, next) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;
    
    const result = {
        message: 'Register Success',
        data: 
        {
            uid : 1,
            fullName : fullName,
            email : email,
            password : password,
        }
    }
    
    res.status(201).json(result);
};
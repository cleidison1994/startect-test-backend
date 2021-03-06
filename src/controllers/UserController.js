const User = require('../models/User');

module.exports ={
    async index(req, res){
        const users = await User.find();

        return res.json(users);
    },
    async store(req, res){
        
        const{name,email}  =req.body;
        const newuser = await User.create({
            name,
            email,
        })
        return res.json(newuser);
    }
}
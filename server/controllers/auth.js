const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.postSignup = async (req, res) => {
    console.log(req.body.email +" "+ req.body.password)
    if (!req.body.email || !req.body.password){
        res.json({
            success: false,
            message: "Please enter email and password"
        });
    }else {
        try{
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            await  newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800
            });
            res.json({
                success: true,
                token: token,
                message: "Successfully created a new user"
            })
            console.log(token);
        }catch (err) {
            console.log(err);
            res.status(500).json({
                status: false,
                message: err.message
            })
        }
    }
}


exports.postLogin = async (req, res) => {
    try{
        let foundUser = await User.findOne({
            email: req.body.email,
        });
        if (!foundUser){
            res.status(403).json({
                success: false,
                message: "User not found"
            })
        }else {
            if (foundUser.comparePassword(req.body.password)){
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800
                });
                res.json({
                    success: true,
                    token: token,
                })
            } else {
                res.status(403).json({
                    status: false,
                    message: "Wrong password"
                })
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

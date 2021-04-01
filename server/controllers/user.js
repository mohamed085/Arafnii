const User = require('../models/user');

exports.getProfile = async (req, res) => {
    try{
        let foundUser = await User.findOne({
            _id: req.decoded._id
        });
        if (foundUser){
            res.json({
                success: true,
                user: foundUser
            })
        }
    }catch (err){
        console.log(err);
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}

exports.getProfileById = async (req, res) => {
    try{
        let foundUser = await User.findOne({
            _id: req.params._id
        });
        res.json({
            success: true,
            user: foundUser
        })
    }catch (err){
        console.log(err);
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}

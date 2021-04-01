const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    about: {
        type: String
    },
    dateOfBirth:{
        type: String
    },
    blogs:[{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }],
});

UserSchema.pre('save', function (next) {
    let user = this;
    if (this.isModified('password ') || this.isNew){
        bcrypt.genSalt(10, function (err, salt){
            if (err){
                return next(err)
            }
            bcrypt.hash(user.password, salt, null, function (err, hash){
                if (err){
                    return next(err)
                }
                user.password = hash;
                next();
            });
        });
    }else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (password, next){
    let user = this;
    return bcrypt.compareSync(password, user.password);
}

module.exports = mongoose.model('User', UserSchema);
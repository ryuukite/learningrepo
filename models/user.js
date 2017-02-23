
//defines user model for collection users and schema users

var mongoose = require('mongoose'),
Schema = mongoose.Schema

var userSchema = new Schema({
                name: {type:String, required:true},
                username: {type:String, required:true, unique:true},
                password: {type:String, required:true},
                email: {type:String, required:true, unique:true}
        })

mongoose.model('user', userSchema); 


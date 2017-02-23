var express = require('express')
var bodyParser= require('body-parser')
fs = require('fs')
//var http = require('http') if no express


var mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost/noderest')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(){console.log('Connected')})


var app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
require('./models/user.js')
require('./routes')(app)


app.listen(3000, function() {
        console.log('Example app listening on port 3000!')
})



/*
app.post('/post',function (req,res){
res.set('Content-Type', 'text/plain')
res.send('you posted: \n name='+req.body.name + ' \n username='+ req.body.username +' \n password='+req.body.password + ' \n email='+req.body.email + '\n')}
)
*/

 
/*db.once('open', function() {

	//schema : defines user and its attributes
	var userSchema = mongoose.Schema({
		name: String,
		username: String,
		password: String,
		email: String
	})



	//Model is a class used to construct documents and will look for plural collection ( ie Users)
	var User = mongoose.model('User', userSchema)

	//make available to other node applications
	//module.exports = User; 

	//create user 
	var newUser = User({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password,
		email: req.body.email  
	})

	
	//Save User to db 
	
	newUser.save(function(err){
		if (err) throw err; 
		console.log('User created');
	})
	
	//console.log('CONNECTED')


})*/





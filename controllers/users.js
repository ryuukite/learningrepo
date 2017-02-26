var mongoose = require('mongoose')
var user = mongoose.model('user')
var util = require ('util')
//defines user functions 

//exports.findAll = function() {}
//exports.findByName = function() {}
exports.add = function(req, res) {

user.create(req.body, function(err, user){

        if (err) {
		console.log(util.inspect(err))
		if (err.name === 'MongoError' && err.code === 11000){
			//Duplicate check
		return res.status(500).send('Username ' + req.body.username  + ' already exists!')
				}
			return console.log(err)
	}
        	//mongoose.disconnect()
	return res.send(user)


})

//res.set('Content-Type', 'text/plain')
//res.send('you posted: \n name='+req.body.name + ' \n username='+ req.body.username +' \n password='+req.body.password + ' \n email='+req.body.email + '\n') 
}

//exports.update = function() {}
//exports.delete = function() {}

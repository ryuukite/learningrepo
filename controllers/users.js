var mongoose = require('mongoose'),
user = mongoose.model('user')

//defines user functions 

//exports.findAll = function() {}
//exports.findByName = function() {}
exports.add = function(req, res) {

user.create(req.body, function(err, user){

        if (err) return console.log(err)
        	//mongoose.disconnect()
	return res.send(user)


})

//res.set('Content-Type', 'text/plain')
//res.send('you posted: \n name='+req.body.name + ' \n username='+ req.body.username +' \n password='+req.body.password + ' \n email='+req.body.email + '\n') 
}

//exports.update = function() {}
//exports.delete = function() {}

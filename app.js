var express = require('express')
var app = express()
var bodyParser= require('body-parser') 

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.listen(3000, function() {	
	console.log('Example app listening on port 3000!')
})

app.post('/post',function (req,res){
	res.send('YOU POSTED :'+ req.body.name)
})



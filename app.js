var express = require('express')
var app = express()
var bodyParser= require('body-parser') 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.listen(3000, function() {	
	console.log('Example app listening on port 3000!')
})

app.post('/post',function (req,res){
res.set('Content-Type', 'text/plain')	
res.send('you posted: \n name='+req.body.name + ' \n username='+ req.body.username +' \n password='+req.body.password + ' \n email='+req.body.email + '\n')}
)


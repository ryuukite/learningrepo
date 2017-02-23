module.exports = function(app){

var users = require('./controllers/users') // calls users file in controllers folder filled with function definitions
//app.get('/users', users.findAll)
//app.get('/users/:name', users.findByName)
app.post('/users', users.add)
//app.put('users/:name', users.update)
//app.delete('users/:name', users.delete)

}

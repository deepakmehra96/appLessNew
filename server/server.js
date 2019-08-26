var express = require('express');
var bodyParser = require('body-parser')
var app=express();
var server = require('http').Server(app)
var path = require('path')
var mongoose = require('mongoose');
var port = process.env.PORT || 3060;
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/appless', { useNewUrlParser: true })
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var config = require('./config');

app.set('superSecret', config.secret);

app.use(express.static(path.join(__dirname, 'public')))
  
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var Login = require('./Schema/login');

app.get('/test', (req, res, next)=>{
        res.send('data')
})

app.post('/login',
	function (req, res) {
		Login.findOne({ "username": req.body.username.toLowerCase(), "password": req.body.password }, function (err, user_data) {
			if (err || !user_data) {
				return res.status(401).json({
					status: 401,
					message: "Invalid username and password.",
				});
			} else {
				res.status(200).json({
					message: "You have succesfully logged in.",
					data: user_data,
				});
			}
		});
	});


	// chartsData


    // app.post('/register',
// 	function (req, res) {
// 		var login = new Login();
// 		Login.findOne({ "email": req.body.email.toLowerCase()}, function (err, user_data) {
// 			if (err) {
// 				console.log(err, 'error')
// 			}
// 			if (user_data) {
// 				return res.status(400).json({ message: 'Email Already Exists'});
// 			}
// 			login.name = 'Test';
// 			login.password = "123456";
// 			login.email = 'test@gmail.com';
// 			login.save(function (err, login_data) {
// 				if (err)
// 					return res.status(400).send(err);
// 				res.json({
// 					status: 200,
// 					data: user_data,
// 					message: 'You have succesfully registered.'
// 				});
// 			});
// 		});
// 	});

  
server.listen(port,() => {
    console.log(`app running on port ${port}`)
});

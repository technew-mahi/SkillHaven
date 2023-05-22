// var createError = require('http-errors')
// var session = require('express-session')
// var flash = require('express-flash')
// var express = require('express')
// var logger = require('morgan')
// var path = require('path')
// var cookieParser = require('cookie-parser')
// var bodyParser = require('body-parser')
// var db = require('./demo_db_connection')
// var app = express()
// app.set('views', path.join(__dirname, ''))
// app.set('view engine', 'ejs')
// app.use(logger('dev'))
// app.use(express.json())
// app.use(cookieParser())
// app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(
//   session({
//     secret: '123@123abc',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 },
//   }),
// )
// app.use(flash())
// app.get('/', function (req, res, next) {
//   res.render('index', { title: 'User Form' })
// })
// app.post('/login.html', function (req, res, next) {
//   var name = req.body.user
//   var email = req.body.email
//   var password = req.body.password
//   var sql = `INSERT INTO users (user, email, password, cpassword) VALUES ("${name}", "${email}", "${password}", NOW())`
//   db.query(sql, function (err, result) {
//     if (err) throw err
//     console.log('Row has been updated')
//     req.flash('success', 'Data stored!')
//     res.redirect('/')
//   })
// })
// app.use(function (req, res, next) {
//   next(createError(404))
// })
// app.use(function (err, req, res, next) {
//   res.locals.password = err.password
//   res.locals.error = req.app.get('env') === 'development' ? err : {}
//   res.status(err.status || 500)
//   res.render('error')
// })
// app.listen(5555, function () {
//   console.log('Node server is running on port : 5555')
// })
// module.exports = app
// othrs*************************


const express = require('express');
const router = express.Router();
const db=require('./demo_db_connection');
const http=require("http")

// to display registration form 
router.get('/', function(req, res, next) {
  console.log("routs")
  res.render('index');
});

// to store user input detail on post request
router.post('/login.html', function(req, res, next) {
    console.log("hghyg")
    inputData ={
        name: req.body.name,
        email: req.body.email,
        psame: req.body.psame,
        psame : req.body.psame
    }
// check unique email address
var sql='SELECT * FROM users WHERE email =?';
db.query(sql, [inputData.email] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.email+ "was already exist";
 }else if(inputData.cpassword != inputData.password){
    var msg ="Password & Confirm Password is not Matched";
 }else{
     
    // save users data into database
    // var sql = 'INSERT INTO users (user, email, user_password, user_cpassword) VALUES ("nahesh, "mahi@gmai.com", "123456", "123456")';
    // var sql='INSERT INTO `users`(`user`, `email`, `user_password`, `user_cpassword`) VALUES ("mahesh","[value-2]","[value-3]","[value-3]")'
    var sql = `INSERT INTO users (user, email, user_password, user_cpassword) VALUES ('${name}', '${email}', '${psame}', '${psame}')`;
    db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully registered";
 }
 res.render('index',{alertMsg:msg});
})
    
});
module.exports = router;
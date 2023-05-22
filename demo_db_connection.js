// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: null,
//   database:"E_Kaksha"
// });

// // con.connect(function(err) {
// //   if (err) throw err;
// //   console.log("Connected!");
// //   con.query("CREATE DATABASE E_Kaksha", function (err, result) {
// //     if (err) throw err;
// //     console.log("Database created");
// //   });
// // });
// // **************
// // let express = require('express');
// // let app=express();
// // let bodyParser=require('body-parser');
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended:true}));
// // app.get("/",function(req,res){
// //   res.sendFile(__dirname+'/login.html')
// // });
// // app.post("/",function(req,res){
// //   console.log(req.body)
// // })
// // app.listen(7000)




// var express = require('express');
// var router = express.Router();
// con.connect(function(error){
// 	if(error)
// 	{
// 		throw error;
// 	}
// 	else
// 	{
// 		console.log('MySQL Database is connected Successfully');
// 	}
// });

// /* GET home page. */
// router.get('/login.html', function(req, res, next) {
//   res.render('index', { title: 'Express', session : req.session });
// });

// router.post('/login.html', function(request, response, next){

//     var email = request.body.email;

//     var password = request.body.password;

//     if(email && password)
//     {
//         query = `
//         SELECT * FROM user 
//         WHERE email = "${email}"
//         `;

//         database.query(query, function(error, data){

//             if(data.length > 0)
//             {
//                 for(var count = 0; count < data.length; count++)
//                 {
//                     if(data[count].password == password)
//                     {
//                         request.session.user = data[count].user;

//                         response.redirect("/");
//                     }
//                     else
//                     {
//                         response.send('Incorrect Password');
//                     }
//                 }
//             }
//             else
//             {
//                 response.send('Incorrect Email Address');
//             }
//             response.end();
//         });
//     }
//     else
//     {
//         response.send('Please Enter Email Address and Password Details');
//         response.end();
//     }

// });

// router.get('/logout', function(request, response, next){

//     request.session.destroy();

//     response.redirect("/");

// });

// module.exports = router;
// var mysql = require('mysql');
// var conn = mysql.createConnection({
//   host: 'localhost',  // assign your host name
//   user: 'root',       //  assign your database username
//   password: '',      // assign your database password
//   database: 'e_kaksha', // assign database Name
// }); 
// conn.connect(function(err) {
//   if (err) throw err;
//   console.log('Database is connected successfully !');
// });
// module.exports = conn;












// new
var express = require('express');
var app = express();


// Ejs 

var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "e_kaksha",
});
connection.connect(
  function(err) {
      if (err) throw err;
      console.log('Database is connected successfully !');
    }
);
app.get('/',function(req,res) {
  console.log("yeeeeeeeeeeee..........")
     res.sendFile(__dirname + './login.html');
    res.render('index');
});
connection.query(`select * from users `,(err,req,fill)=>{
  if(err){
    return console.log(err);
  }
  return console.log(req);
})

app.post('/', function(req, res, next) {
  console.log("Get....................")
    connection.connect(function(err) {
        if (err) throw  err;
        console.log("connected");
        var sql = "INSERT INTO `users` (`user`, `email`, `user_password`, `user_cpassword`) VALUES ('" + req.body.name + "', '" + req.body.email + "','" + req.body.psame + "','" + req.body.psame + "')";
        con.query(sql, function(err, result)  {
            if(err) throw err;
            console.log("table created");
        });
    });
    console.log(req.body)
    console.log(req.body.user);
    console.log(req.body.email);
    res.render('index', {title: 'Express'});
});

connection.end();

app.listen(5500, function () {
    console.log(`'Listening on port 5500'`);
});
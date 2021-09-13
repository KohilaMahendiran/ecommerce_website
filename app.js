var mysql=require('mysql');
//connection node and mysql
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mprKohila30061995#",
    database:"mpr"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    con.query("create table students (student_id int,student_name varchar(200),student_city varchar(200))",function(err,result){
        if(err) throw err;
        console.log("Table Created");
    });
});
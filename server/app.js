const express= require('express');
const app= express();
const mysql= require('mysql');


const bodyParser= require("body-parser");


const cors=require('cors');


const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'application'

});

con.connect(function(error){
    if(!!error) console.log(error);
    else console.log('database connected');


});

app.use(cors());





app.get('/get',(req,res)=>{ res.send("hi");
});





app.get('/api/get', (req, res)=> 
{
   con.connect(function(err) {
        
        con.query('SELECT * FROM user', (err, rows) =>
        {
          if (!err) {
              res.send(rows)
            }
         else
         {
          console.log(err);
        }
        })
      })
});


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/api/insert',(req,res) => {

    const name = req.body.name;
   
  
   const sqlInsert="insert into user (name) values (?)" ; 
   con.query(sqlInsert, [name], (err, result)=> {
   console.log(result);
        
});
});

app.listen(3001, () => {
    console.log('server is running on port 3001');
});
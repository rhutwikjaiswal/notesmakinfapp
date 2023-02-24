const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');


const db = mysql.createPool({
    host:'localhost',   
    user:'root',
    password:'password',
    database:'NOTEMAKINGAPP',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post('/save',(req,res)=>{

    const text = req.body.text;
    const time = req.body.time;

    const sqlInsert = "INSERT INTO note (text, time) VALUES (?,?)";
    db.query(sqlInsert,[text, time], (err, result) => {
         console.log(result);
        });
})


app.listen(3001 ,()=>{
    console.log('App is running on port 3001');
});
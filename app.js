var express = require('express')
const fs = require('fs')
const bodyparser = require('body-parser')
const app = express()

const urleancodedParser = bodyparser.urlencoded({extended:false})

app.set('view engine', 'ejs');

app.get('/',(req,res) =>{
    res.render('main')
    console.log("Пост получени")
})

app.post('/', urleancodedParser, (req,res)=>{
    console.log(req.body)
    res.render('main')
    fs.appendFileSync('users_info.txt', req.body['email'] + "  " +req.body['passwird'] + "\n")
})

app.listen(4000)
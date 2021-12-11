const express = require('express');
const app = express();
const port = 8000;

app.set('view engine','ejs');
app.set('views', './views');
app.use(express.urlencoded());

const db = require('./config/mongoose');
const task = require('./models/todolist');

app.use(express.static('./assets'));

app.use('/', require('./routes/index'));
app.post('/create-task', (req,res)=>{
    console.log(req.body);
    task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },(err,task)=>{
        if(err){
            console.log("Error occured in creating new contact");
            return;
        }
        console.log(task);
        return res.redirect('back');
    });
});

app.get('/delete-task',(req,res)=>{
    let id = req.query.id;
    task.findByIdAndDelete(id, (err)=>{
        if(err){
            console.log("Error in deleting from database");
            return;
        }
        return res.redirect('back');
    });
});

app.listen(port, (err)=>{
    if(err){
        console.log("Error in connecting to port");
    }
    console.log("Successfully connected to the port",port);
});
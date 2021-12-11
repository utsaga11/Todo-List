const task = require("../models/todolist");

module.exports.home = function(req,res){
     task.find({}, function(err, task){
         if(err){
             console.log("Error in fetching from database");
             return;
         }
    return res.render('home',{
        title: "Todo-List", Tasks: task
    });
     });
   
};
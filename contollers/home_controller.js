const task = require("../models/todolist");

module.exports.home = function(req,res){
     task.find({}, function(err, task){
         if(err){
             console.log("Error in fetching from database");
             return;
         }
    return res.render('index',{
        title: "Todo-List", Tasks: task
    });
     });
   
};
module.exports.singup = function(req, res){
    return res.render('user_sign_up',{
        title: "TodoList | Sign Up"
    })
};
module.exports.singin = function(req, res){
    return res.render('user_sign_in',{
        title: "TodoList | Sign In"
    })
};
module.exports.create = function(req,res){

}
module.exports.createsession = function(req,res){
    
}
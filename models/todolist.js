const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

const task = mongoose.model('task',TodoListSchema);
module.exports = task;
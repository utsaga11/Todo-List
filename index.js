const express = require('express');
const app = express();
const port = 8000;

app.set('view engine','ejs');
app.set('views', './views');

app.use(express.static('./assets'));

app.use('/', require('./routes/index'));

app.listen(port, (err)=>{
    if(err){
        console.log("Error in connecting to port");
    }
    console.log("Successfully connected to the port",port);
});
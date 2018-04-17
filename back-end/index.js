const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const imageRouter = require('./modules/api/images/route')

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/images',imageRouter);
app.get('/',(req,res)=>{
    res.send("OK");
})

mongoose.connect('mongodb://localhost:27017/tk-hotgirls', (err) => {
    if (err) console.error(err);
    else console.log('Database connect successful');

})

const port = process.env.port || 6969; 

app.listen(port,err=>{
    if(err) console.log(err);
    console.log('Server started at port '+ port);
});


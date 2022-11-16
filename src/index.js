const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());


/*----------------------------------------------------------------------
🗃️ connect mongo db
----------------------------------------------------------------------*/


mongoose.connect("mongodb+srv://Keshav-cyber:7LizqrsG6tL39fuT@cluster0.ohm0bak.mongodb.net/group38Database?retryWrites=true&w=majority", {
        useNewUrlParser: true          //allowing user to use any new url cluster string 
    })
    .then((result) => console.log("MongoDb is connected"))
    .catch((err) => console.log(err))




//calling route globally here
app.use('/', route)





//binding and listening the connection on specified port
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
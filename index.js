//application uses AWS Lambda, AWS API Gateway, and is connected to using React Native application. 
//.env files to hold sensitive information. 
// exports.handler = async (event) => {
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
require('dotenv').config();

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const { Site } = require('./models/site');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

let mongoDbVal;
let response;



// Site.find({}, (err, site) => {
//     if (err) return err;
//     mongoDbVal = site[0].siteInfo[0];
//     console.log(JSON.stringify(mongoDbVal));
// });

// };

const port = process.env.PORT || 8080;



const setResponse = async() =>{
    console.log("About to start setting the port for Express.");
    await app.listen(port, () => {
        console.log(`Server Running at : ${port}`);
    });
    console.log("about to hit the first await.")
    await Site.find({}, (err, site) => {
        if (err) return err;
        site[0].siteInfo[0];
        mongoDbVal = site[0].siteInfo[0]
        console.log("await  1 is done")
        console.log(mongoDbVal);
    })
    console.log("before setting response")
    response = {
        statusCode: 200,
        body: JSON.stringify(mongoDbVal),
    };
    console.log("before the return statement")
    console.log(response);
    return response;
}
setResponse();
// } //ends the lambda export handler function. 
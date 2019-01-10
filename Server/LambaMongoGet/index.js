//application uses AWS Lambda, AWS API Gateway, and is connected to using React Native application. 
//.env files to hold sensitive information. 
exports.handler = async (event) => {
var mongoose = require("mongoose");
const { Site } = require('../../models/site');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

let mongoDbVal;
let response;

const setResponse = async() =>{
    await Site.find({}, (err, site) => {
        if (err) return err;
        site[0].siteInfo[0];
        mongoDbVal = site[0].siteInfo[0]
    })
    response = {
        statusCode: 200,
        body: JSON.stringify(mongoDbVal),
    };
    return response;
}
return setResponse();
} //ends the lambda export handler function. 
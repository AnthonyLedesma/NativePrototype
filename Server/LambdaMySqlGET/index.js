//application uses AWS Lambda, AWS API Gateway, and is connected to using React Native application. 
//.env files to hold sensitive information. 
//exports.handler = async (event) => {

var DB = require('./.env.js'); //Not included in Lambda
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: DB.DBHOST,
    user: DB.DBUSER,
    password: DB.DBPASS,
    database: DB.DBNAME
});


const setResponse = async () => {
    let response;
    await connection.connect();

    await connection.query('CREATE TABLE IF NOT EXISTS profile( profile_id INT AUTO_INCREMENT, title VARCHAR(255) NOT NULL, start_date DATE, last_login_date DATE, status TINYINT NOT NULL, priority TINYINT NOT NULL, description TEXT, PRIMARY KEY(profile_id)) ENGINE = INNODB; ', function (error, results, fields) {
        if (error) throw error;
        response = results;
        console.log('The response is: ', results);
    });

    // await connection.query('INSERT INTO profile (title, priority, description)   VALUES ("Owner", 10, "This guy is a real badass")', function (error, results, fields) {
    //     if (error) throw error;
    //     response = results;
    //     console.log('The response is: ', results);
    //     return response;
    // });
    

    await connection.query('SELECT * FROM profile', function (error, results, fields) {
        if (error) throw error;
        response = results;
        console.log('The response is: ', results);
        return response;
    });

    await connection.end();
    return response;
}
return setResponse();
//    } //ends the lambda export handler function.
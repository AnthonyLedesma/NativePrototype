//application uses AWS Lambda, AWS API Gateway, and is connected to using React Native application. 
//.env files to hold sensitive information. 
//exports.handler = async (event) => {

// import { DBHOST, DBNAME, DBPASS, DBUSER } from './.env.js'; //Not included in Lambda
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '107.180.50.175',
    user: 'NativePrototype',
    password: 'U4Sd8@q@Udb~',
    database: 'NativePrototype'
});


const setResponse = async () => {
    let response;
    await connection.connect();

    await connection.query('CREATE TABLE IF NOT EXISTS profile( profile_id INT AUTO_INCREMENT, title VARCHAR(255) NOT NULL, start_date DATE, last_login_date DATE, status TINYINT NOT NULL, priority TINYINT NOT NULL, description TEXT, PRIMARY KEY(profile_id)) ENGINE = INNODB; ', function (error, results, fields) {
        if (error) throw error;
        response = results[0];
        console.log('The response is: ', results);
    });

    await connection.query('SELECT * FROM profile', function (error, results, fields) {
        if (error) throw error;
        response = results[0];
        console.log('The response is: ', results);
        return response;
    });

    await connection.end();
    return response;
}
return setResponse();
//    } //ends the lambda export handler function.
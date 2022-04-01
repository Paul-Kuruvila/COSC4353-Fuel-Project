const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const port = 5000;
const loginData = require('./data/db.json')

const fs = require('fs');
let filedata = fs.readFileSync('./data/db.json');
let userData = JSON.parse(filedata);

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'admin',
	database : 'fuelio'
});

const app = express();

app.use(cors());

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', function(request, response) {//ignore for now
	// Render login template
	response.sendFile(path.join(__dirname + '/login'));
});

app.post('/register', function(request, response){
	let username = request.body.username;
	let password = request.body.password;

	if(username && password){
		try{
			connection.promise().query(`INSERT INTO UserCredentials VALUES('${username}', '${password}') `);
			response.status(201).send({ msg: 'Account created.' });
			console.log("Account created.");
		}
		catch(err){
			console.log(err);
			console.log("Account name is already taken.");
		}
	}
})

app.post('/auth', function(request, response) {
	// Capture the input fields
    //console.log(request.body);
	let username = request.body.username;
	let password = request.body.password;

	// Ensure the input fields exists and are not empty
	if (username && password) {
        console.log("Successfully obtained username and password");
		//Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM UserCredentials WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
                response.json('Successfully logged in. (FRONTEND)');
                //response.redirect('http://localhost:3000/profile');
				console.log("Successfully logged in.");
			} else {
				response.json('Incorrect Username and/or Password! (FRONTEND)');
				console.log("Incorrect Username and/or Password! (BACKEND)");
			}			
			response.end();
		});
	} else {
		response.json('Please enter Username and Password!');
		response.end();
	}

});

app.post('/profile', function(request, response) {
	// If the user is loggedin /WILL BE UTILIZING MYSQL
	let name = request.body.name;
	let address = request.body.address;
	let address2 = request.body.address2;
	let city = request.body.city;
	let state = request.body.state;
	let zipcode = request.body.zipcode;

	try{
		connection.promise().query(`INSERT INTO ClientInformation VALUES('${name}', '${address}', '${address2}', '${city}', '${state}', '${zipcode}') `);
		response.status(201).send({ msg: 'Information saved.' });
		console.log("Information saved.");
	}
	catch(err){
		console.log(err);
		console.log("Information was not saved.");
	}

	if (request.session.loggedin) {
		// Output username
		//response.send('Welcome back, ' + request.session.username + '!');
		console.log(`Welcome back, ${request.session.username}!`);
	} else {
		// Not logged in
		//response.send('Please login to view this page!');
		console.log("Please login to view this page!");
	}
	response.end();

    
    // if (loggedin == true) {
	// 	// Output username
	// 	response.send('Welcome back, ' + request.session.username + '!');
	// } else {
	// 	// Not logged in
	// 	response.send('Please login to view this page!');
	// }

});

app.post("/fuelquotemodule", (req, res) => { //retrieve
    console.log('Retrieving data from frontend')
    console.log(req.body);

    const data = req.body;

    //console.log(userData);
    
    userData.push(data)
    fs.writeFile('./data/db.json', JSON.stringify(userData), function (err) {
        if (err) throw err;
    });
    
    res.json({
        status: "Data successfully retrieved",
    });
})

app.post("/pricingmodule", (req, res) => { //retrieve
    
})

app.listen(port, () => {console.log(`Server started on port ${port}`)});
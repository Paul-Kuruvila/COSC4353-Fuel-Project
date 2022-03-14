const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const port = 5000;

/*const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'admin',
	database : 'nodelogin'
});*/

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

app.post('/auth', function(request, response) {
	// Capture the input fields
    console.log(request.body);
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
        console.log("Successfully obtained username and password")
		// Execute SQL query that'll select the account from the database based on the specified username and password
		//connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			//if (error) throw error;
			// If the account exists
			/*if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();*/
		//});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/profile', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

app.post("/pricingmodule", (req, res) => { //retrieve
    console.log('Retrieving data from frontend')
    console.log(req.body);
    const data = req.body;
    res.json({
        status: "Data successfully retrieved",
        cost: data.cost
    });
})

app.listen(port, () => {console.log("Server started on port 5000")});
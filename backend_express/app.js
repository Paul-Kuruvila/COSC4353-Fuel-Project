const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
//const loginData = require('./data/db.json')

const fs = require('fs');
const e = require('cors');
const { builtinModules } = require('module');
let filedata = fs.readFileSync('./data/db.json');
//let userData = JSON.parse(filedata);

function express_app(db){    // implemented by Paul - exporting as function, so that it can receive any specified database as a parameter, which is especially useful for database mocking
    const app = express();
    app.use(cors());
    //app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
    app.use(session({
        secret: 'secret',
        saveUninitialized: false,
        resave: false,
        cookie: {secure: false}
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'static')));

    //the above setup by Eric






    app.get('/', function(request, response) {//ignore for now
        //response.sendFile(path.join(__dirname + '/login'));
        response.status(200).send("TEST");
    });

    app.get("/loginstatus", (request, response) => { //done by Paul
        let username = request.session.username;
        let login = false;
        if (username != null) {
            login = true;
        }
        response.send([username,login]);
    })

    app.post('/register', function(request, response){ //registering users //done by Paul
        let username = request.body.username;
        let password = request.body.password;

        if(username && password){
            console.log(`Attempting to register user ${username}...`);
            db.registerUser(username, password, request, response);
        } else {
            response.send({
                status: 'Please enter Username and Password! (FROM BACKEND)'
            });
            console.log("Please enter Username and Password! (BACKEND)");
            response.end();
        }
    });

    app.post('/auth', function(request, response) { //authenticating user logins //done by Eric
        //response.setHeader('Access-Control-Allow-Credentials', 'true')
        //console.log(request.body);

        // Capture the input fields
        let username = request.body.username;
        let password = request.body.password;

        // Ensure the input fields exists and are not empty
        if (username && password) {
            console.log("Successfully obtained username and password");
            db.authUser(username, password, request, response);
        } else {
            response.status(401).send({
                status: 'Please enter Username and Password! (FROM BACKEND)'
            });
            console.log("Please enter Username and Password! (BACKEND)");
            response.end();
        }
    });

    app.post('/logout', function(request, response, next) { //force logout of user //done by Eric
        request.session.loggedin = false;
        let SID = request.sessionID;
        let login = request.session.loggedin;
        request.session.destroy()
        response.send({
            status: "Successfully logged out (FROM BACKEND)",
            login
        })
        console.log("Successfully logged out (BACKEND)");
        //console.log(SID);
        //console.log(login);
        response.end();
    });

    app.get('/profiledata', function(request, response) {//receiving profile data to output in the front end //done by Paul
        let username = request.session.username;
        db.getProfile(username, request, response);
    })

    app.post('/profile', function(request, response) { //saving profile data //setup by Paul //query by Eric
        //response.setHeader('Access-Control-Allow-Credentials', 'true')
        //console.log(request.body.state);
        //console.log(request.session.loggedin)
        //console.log(request.sessionID)

        if (request.session.loggedin) {
            db.updateProfile(request, response);
        } else {
            response.status(401).send({
                status: "Please login to view this page! (FROM BACKEND)"
            })
            console.log("Please login to view this page!");
        }
        response.end();
    });

    app.post("/pricingmodulecost", (request, response) => { //updating total cost when receiving request input 
                                                            //calculations (by David) copied from /fuelquotemodule //done by Eric
        if (request.session.loggedin) {
            db.getPricingModuleCost(request, response);
        } else {
            response.status(401).send({
                status: "Please login to view this page! (FROM BACKEND)"
            })
            console.log("Please login to view this page!");
        }
        //response.end();
    })

    app.post("/fuelquotemodule", (request, response) => { //generating the actual fuel quote to be added to the database //setup and queried by Eric, calculations by David
        console.log('Retrieving data from frontend');

        if (request.session.loggedin) {
            db.generateFuelQuote(request, response);
        } else {
            response.status(403).send({
                status: "Please login to view this page! (FROM BACKEND)"
            })
            console.log("Please login to view this page!");
        }
        //response.end();
    })

    app.get("/fuelquotehist", (request, response) => { //receiving fuel quote data for user //done by David
        db.getFuelQuoteHistory(request, response);
    })

    return app;
}

module.exports = express_app;
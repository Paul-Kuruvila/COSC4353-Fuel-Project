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
            response.send({
                status: 'Registered user. (FROM BACKEND)'
            });
        } else {
            response.status(400).send({
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
            response.send({
                status: 'Successfully obtained username and password (FROM BACKEND)'
            })
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
        request.session.destroy();
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
        if(username == undefined)   username = request.body.username; // request.body.username will always be undefined aside for testing purposes
        console.log(`Username is ${username}`);
        if(username == undefined && request.body.username == undefined){ //
            response.status(400).send({
                status: "Could not fetch profile data (FROM BACKEND)"
            })
        } else {
            db.getProfile(username, request, response);
            if(request.session.username == undefined) {
                response.send({ status: "Successfully fetched profile data (FROM BACKEND)" })   // if we are currently mocking database and testing
            }
        }
    })

    app.post('/profile', function(request, response) { //saving profile data //setup by Paul //query by Eric
        //response.setHeader('Access-Control-Allow-Credentials', 'true')
        //console.log(request.body.state);
        //console.log(request.session.loggedin)
        //console.log(request.sessionID)
        let fullname = request.body.name;
        let address = request.body.address;
        let address2 = request.body.address2;
        let city = request.body.city;
        let state = request.body.state;
        let zipcode = request.body.zipcode;

        if (request.session.loggedin || request.body.loggedin === 'yes') { // request.body.loggedin will never evaluate to 'yes' aside from testing purposes
            db.updateProfile(fullname, address, address2, city, state, zipcode, request, response);
            if(request.body.loggedin === 'yes'){ // request.body.loggedin will never evaluate to 'yes' aside from testing purposes
               response.status(200).send({
                   status: "Successfully updated profile. (FROM BACKEND)"
               })
            }
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
        let fuel_request = request.body.request;
        if (request.session.loggedin || request.body.loggedin === 'yes') { // request.body.loggedin will never evaluate to 'yes' aside from testing purposes
            db.getPricingModuleCost(fuel_request, request, response);
            if(request.body.loggedin === 'yes'){ // request.body.loggedin will never evaluate to 'yes' aside from testing purposes
                response.status(200).send({
                    status: 'Successfully updated total cost (FROM BACKEND)'
                })
            }
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
        let fuel_request = request.body.request;
        let fuel_date = request.body.date;

        if (request.session.loggedin || request.body.loggedin === 'yes') { // request.body.loggedin will never evaluate to 'yes' aside from testing purposes
            db.generateFuelQuote(fuel_request, fuel_date, request, response);
            if(request.body.loggedin === 'yes'){
                response.status(200).send({
                    status: "Successfully generated fuel quote. (FROM BACKEND)"
                })
            }
        } else {
            response.status(401).send({
                status: "Please login to view this page! (FROM BACKEND)"
            })
            console.log("Please login to view this page!");
        }
        //response.end();
    })

    app.get("/fuelquotehist", (request, response) => { //receiving fuel quote data for user //done by David
        let username = request.session.username;
        if(username == undefined)   username = request.body.username;   // request.body.username will always be undefined aside for testing purposes
        if(username == undefined){ 
            console.log(`Username is ${username}`);
            response.status(400).send({
                status: "Could not fetch fuel quote history (FROM BACKEND)"
            })
        } else {
            db.getFuelQuoteHistory(username, response);
            if(request.session.username == undefined){ 
                response.status(200).send({
                    status: 'Successfully fetched fuel quote history (FROM BACKEND)'
                })
            }
        }
    })

    return app;
}

module.exports = express_app;
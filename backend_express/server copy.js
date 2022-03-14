const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.post("/login", (req, res) => { //retrieve
    console.log('Retrieving login data from frontend')
    console.log(req.body);
    const data = req.body;
    res.json({
        status: "Login data successfully retrieved",
        username: data.username,
        password: data.password
    });
})


/*app.get("/pricingmodule", (req, res) => { //send
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})*/

app.post("/pricingmodule", (req, res) => { //retrieve
    console.log('Retrieving data from frontend')
    console.log(req.body);
    const data = req.body;
    res.json({
        status: "Data successfully retrieved",
        cost: data.cost
    });
})

app.listen(port, () => {console.log("Server started on port 5000")})

/*const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))*/ // Use this after the variable declaration
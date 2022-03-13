const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())

app.get("/pricingmodule", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(port, () => {console.log("Server started on port 5000")})

/*const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))*/ // Use this after the variable declaration
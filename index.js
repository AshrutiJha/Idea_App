// start the server

const express = require('express')    

const app = express()

app.use(express.json())
// stitching the route here 

require("./routes/ideas.routes")(app) 

app.listen(8000,()=> {
    console.log ("App started on the port num", 8000)
})


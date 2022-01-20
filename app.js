// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/joe", (req, res) => {

  res.send("<h1>Hello World!</h1>")
})

app.get("/joe2", (req, res) => {

    res.send("<h1>Hello World2!</h1>")
  })
  

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));



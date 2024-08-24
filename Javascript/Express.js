//importing express
const express = require('express');

//creating app
const app = express();

//setting port number
const PORT = 3000;

//middeware to parse
app.use(express.json());

//define a route
app.get('/', (req, res) => {
    res.send("Hello world");
})

//starting the server
app.listen(PORT, () => {
    console.log("server is running")
})
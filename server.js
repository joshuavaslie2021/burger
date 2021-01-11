const express = require("express")

var PORT = process.env.PORT || 3000;

var app = express();
// Sets up the Heroku app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function() {
    console.log("App listening on Port " + PORT)
})
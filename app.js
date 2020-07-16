const express = require("express");
const app = express();
var faker = require('faker');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/warfare", function(req, res){
    res.render("warfare.ejs");
});

app.get("/logistics", function(req, res){
    res.render("logistics.ejs");
});

app.get("/intel", function(req, res){
    res.render("intel.ejs");
});

app.get("/sources", function(req, res){
    res.render("sources.ejs", {
        "randomCard": faker.helpers.createCard()
    });
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is runing...");
});
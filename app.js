const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
var faker = require('faker');

//routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/warfare", function(req, res){
    res.render("warfare.html");
});

app.get("/logistics", function(req, res){
    res.render("logistics.html");
});

app.get("/intel", function(req, res){
    res.render("intel.html");
});

app.get("/sources", function(req, res){
    res.render("sources.html", {
        contactCard: faker.helpers.createCard()
    });
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is runing...");
});
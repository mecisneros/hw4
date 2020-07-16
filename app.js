const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/overview", function(req, res){
    res.render("index.html");
});

app.get("/warfare", function(req, res){
    res.render("warfare.html");
});

app.get("/logistics", function(req, res){
    res.render("logistics.html");
});

app.get("/intelligence", function(req, res){
    res.render("intel.html");
});

app.get("/sources", function(req, res){
    res.render("sources.html");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is runing...");
});
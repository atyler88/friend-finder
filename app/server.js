var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 

// request(url, callback)
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// serves static assets: images, stylesheets, client side javascript
// app.use('/', express.static(path.join(__dirname, '/public')));
// app.use('/', express.static(path.join(__dirname, 'routing')));
var friend =[
];
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
});
app.get("/api/friends", function(req, res) {
    res.json(friend);
});
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
  
    console.log(newFriend);
  
    friend.push(newFriend);
    res.json(friend);
});




app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
 
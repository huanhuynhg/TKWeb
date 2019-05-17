var http = require('http');
var express = require('express');
var app = express();
var ejsEngine = require("ejs-locals");
app.engine("ejs", ejsEngine);
app.set("view engine", "ejs");
// var csdl = require("./XL_Du_Lieu/XL_LoaiHoa");
// const bodyParser = require('body-parser');
// var url = require('url');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", async function (req, res) {
    res.render("index", {title: 'Glammy | Home'});
});
var server = http.createServer(app);
server.listen(8080);
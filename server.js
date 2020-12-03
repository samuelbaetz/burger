var express = require("express")
var exphbs = require("express-handlebars");
var app = express()
var PORT = process.env.PORT || 3002

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./controllers/controllers.js")(app)

app.listen(PORT, function(){
    console.log("Daddy's Home on " + PORT)
})
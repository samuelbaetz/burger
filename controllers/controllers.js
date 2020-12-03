const { create } = require('express-handlebars');
const Burger = require('../models/burger.js');

module.exports = function(app) {

    app.get("/", function(req, res) {
       res.render("index");
       });
       
    app.get('/api/notdevoured', function(req, res){
        Burger.findAll({where: {devoured: false}}).then(function(results){
            res.json(results)
        })
    });

    app.get('/api/devoured', function(req, res){
        Burger.findAll({where: {devoured: true}}).then(function(results){
            res.json(results)
        })
    })

    app.post('/api/new', function(req,res){
        console.log("Burgers: ")
        console.log(req.body)
        Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }).then(function(results){
            res.json(results)
        })
    })


}


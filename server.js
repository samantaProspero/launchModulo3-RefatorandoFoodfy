const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape:false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("index", {items: recipes})
})
server.get("/about", function(req, res){
    return res.render("about")
})
server.get("/recipes", function(req, res){
   
    let recipesFiltered = []
    for(let i=0; i<recipes.length; i++){
        const obj = recipes[i]
        obj.index = i
        recipesFiltered.push(obj)
    }

    return res.render("recipes", {items: recipesFiltered})
})
server.get("/recipes/:index", function(req, res){
    const {index:recipeIndex} = req.params

    const recipe = recipes[recipeIndex]
    if(!recipe){
        return res.send("Recipe not found!")
    }
    return res.render("recipe", {item: recipe, recipeIndex})
})

server.listen(5000, function(){
    console.log("server is running")
})
const route = require("express").Router();
const ldata = require("../models/schema");
const data = require("../models/schema");
const path = require("path");
const mongoose = require("mongoose");
var db = mongoose.collection;

route.get("/login", (req, res) => {
    res.redirect("login.html");
})

route.get("/signup", (req, res) => {
    res.redirect("signup.html");
})

route.post("/sig", (req, res) => {
    const log = new data(req.body);
    log.save().then( () =>{
        res.redirect("/login");
    }).catch(err => {console.log(err)})
});

route.post("/log", (req,res) =>{
    const user = req.body.email;
    const password = req.body.password;
    
    ldata.findOne({email: user}).then((result) =>{

        console.log(result);
        if(result == null){
            console.log("User not found");
            res.redirect("/login");
        }

        else if(password == result.password){
            res.redirect("success.html");
        }

        else{
            res.redirect("login.html");
            console.log("Wrong password");
        }
    })
})

module.exports = route;
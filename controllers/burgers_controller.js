var express = require("express");

var router = express.Router()

var burger = require("../models/burger.js")

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    })    
});

router.post("/api/burgers", function(req, res) {
    console.log("req body", req.body)
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        res.json({ id: result.insertId})
    })
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(
        req.params.id,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404)
            }
            res.status(200)
        }
    )
})





module.exports = router
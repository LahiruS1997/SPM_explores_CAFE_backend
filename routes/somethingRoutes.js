const somethingRouter = require('express').Router();
let Something = require('../models/somethingModel');

//create something new
somethingRouter.route("/createSomething").post((req, res) => {
    const something_id = req.body.something_id;
    const somethingName = req.body.somethingName;
    const someCount = req.body.someCount;

    const newSomething = new Something({
        something_id,
        somethingName,
        someCount
    })
    newSomething.save().then(() => {
        res.json("Created Something New.")
    }).catch((err) => {
        console.log(err)
    })
})

//view Something
somethingRouter.route("/viewAll").get((req, res) => {
    Something.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Delete something
somethingRouter.delete("/deleteSomething", (req, res) => {
    Something.findOne({something_id: req.body.something_id}, (err) => {
        if(!err){
            res.send("Something deleted...")
        }
        else{
            res.send(err)
        }
    })
})

module.exports = somethingRouter;
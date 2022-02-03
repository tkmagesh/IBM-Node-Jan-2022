var express = require('express');
var router = express.Router();

var taskList = [
    {id : 1, name : 'Study JavaScript', isCompleted : false },
    {id : 2, name : 'Build Services', isCompleted : true },
    {id : 3, name : 'Master Node.js', isCompleted : false },
]
router.get('/', function(req, res, next){
    res.json(taskList);
});

router.post('/', function(req, res, next){
    console.log(req.body); //access the req body deserialized from json string
    //fill in the blanks
    //res.send('Task added')
    //id = max id + 1
    //send the newly created task with status code 201
});

router.get('/:id', function(req, res, next){
    console.log('Serving task with id ', req.params.id) //access the route parameter
    console.log(req.query)
    res.json(taskList);
});

router.put('/:id', function (req, res, next){

});

router.delete('/:id', function(req, res, next){
    
})

module.exports = router;
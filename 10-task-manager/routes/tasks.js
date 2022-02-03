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
    console.log(req.body);
    res.send('Task added')
});

router.get('/:id', function(req, res, next){
    console.log('Serving task with id ', req.params.id)
    res.json(taskList);
});

module.exports = router;
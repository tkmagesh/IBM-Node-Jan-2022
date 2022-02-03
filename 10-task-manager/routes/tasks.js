var express = require('express');
var router = express.Router();
var taskController = require('../controllers/taskController')


router.get('/', function(req, res, next){
    var taskList = taskController.getAll()
    res.json(taskList);
});

router.post('/', function(req, res, next){
   var newTaskData = req.body;
   var newTask = taskController.createNew(newTaskData)
   res.status(201).json(newTask)
});

router.get('/:id', function(req, res, next){
    var id = parseInt(req.params.id)
    var task = taskController.getById(id)
    if (!task){
        res.status(404).end()
    } else  {
        res.json(task)
    }
});

router.put('/:id', function (req, res, next){
    var id = parseInt(req.params.id)
    var updatedTaskData = req.body;
    var task = taskController.getById(id)
    if (!task){
        res.status(404).end()
    } else  {
        var updatedTask = taskController.save(id, updatedTaskData)
        res.json(updatedTask);
    }
});

router.delete('/:id', function(req, res, next){
    var id = parseInt(req.params.id)
    var task = taskController.getById(id)
    if (!task){
        res.status(404).end()
    } else  {
        taskController.remove(id)    
        res.status(200).end()
    }
});

module.exports = router;
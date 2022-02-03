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
   var newTask = req.body;
   var newTaskId = taskList.reduce(function(result, task){
       return result > task.id ?result : task.id
   }, 0) + 1
   newTask.id = newTaskId
   taskList.push(newTask);
   res.status(201).json(newTask)
});

router.get('/:id', function(req, res, next){
    var id = parseInt(req.params.id)
    var task = taskList.find(function(task){
        return task.id === id;
    })
    if (!task){
        res.status(404).end()
    } else  {
        res.json(task)
    }
});

router.put('/:id', function (req, res, next){
    var id = parseInt(req.params.id)
    var updatedTask = req.body;
    taskList = taskList.map(function(task){
        return task.id === id ? updatedTask : task
    });
    res.json(updatedTask);
});

router.delete('/:id', function(req, res, next){
    var id = parseInt(req.params.id)
    var task = taskList.find(function(task){
        return task.id === id;
    })
    if (!task){
        res.status(404).end()
    } else  {
        taskList = taskList.filter(function(task){
            return task.id !== id
        });
        res.status(200).end()
    }
})

module.exports = router;
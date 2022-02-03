const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')


router.get('/', function(req, res, next){
    const taskList = taskController.getAll()
    res.json(taskList);
});

router.post('/', function(req, res, next){
   const newTaskData = req.body;
   const newTask = taskController.createNew(newTaskData)
   res.status(201).json(newTask)
});

router.get('/:id', function(req, res, next){
    const id = parseInt(req.params.id)
    const task = taskController.getById(id)
    if (!task){
        res.status(404).end()
    } else  {
        res.json(task)
    }
});

router.put('/:id', function (req, res, next){
    const id = parseInt(req.params.id)
    const updatedTaskData = req.body;
    const task = taskController.getById(id)
    if (!task){
        res.status(404).end()
    } else  {
        const updatedTask = taskController.save(id, updatedTaskData)
        res.json(updatedTask);
    }
});

router.delete('/:id', function(req, res, next){
    const id = parseInt(req.params.id)
    const task = taskController.getById(id)
    if (!task){
        res.status(404).end()
    } else  {
        taskController.remove(id)    
        res.status(200).end()
    }
});

module.exports = router;
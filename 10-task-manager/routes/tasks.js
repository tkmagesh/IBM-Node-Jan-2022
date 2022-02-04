const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')


router.get('/', function(req, res, next){
   /*  const p = taskController.getAll()
    p.then(function(taskList){
        res.json(taskList);
    })
    .catch(function(err){
        console.log(err)
        next()
    }) */

    taskController
        .getAll()
        .then(tasks => res.json(tasks))
        .catch(err => {
            console.log(err)
            next(err);
        });
    
});

router.post('/', function(req, res, next){
   const newTaskData = req.body;
   taskController.createNew(newTaskData)
    .then(newTask => res.status(202).json(newTask))
    .catch(err => {
        console.log(err)
        return next(err)
    });
});

router.get('/:id', function(req, res, next){
    const id = parseInt(req.params.id)
    console.log(id)
    taskController
        .getById(id)
        .then(task => {
            if (!task) return res.status(404).end()
            res.json(task)
        })
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
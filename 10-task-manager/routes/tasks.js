const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')

router.get('/', async function(req, res, next){
    try {
        const tasks = await taskController.getAll()
        res.json(tasks)
    } catch(err) {
        console.log(err)
        next(err);
    };
    
});

router.post('/', async function(req, res, next){
    try {
        const newTaskData = req.body;
        const newTask = await taskController.createNew(newTaskData)
        res.status(202).json(newTask)
    } catch(err) {
        console.log(err)
        return next(err)
    };
});

router.get('/:id', async function(req, res, next){
    try {
        const id = parseInt(req.params.id)
        const task = await taskController.getById(id)
        if (!task) return res.status(404).end()
        res.json(task)
    } catch(err) {
        console.log(err)
        return next(err)
    };   
});

router.put('/:id', async function (req, res, next){
    try {
        const id = parseInt(req.params.id)
        const updatedTaskData = req.body;
        const task = await taskController.getById(id)
        if (!task){
            res.status(404).end()
        } else  {
            let updatedTask = await taskController.save(id, updatedTaskData)
            console.log(updatedTask)
            res.json(updatedTask);
        }
    } catch(err) {
        console.log(err)
        return next(err)
    };
});

router.delete('/:id', async function(req, res, next){
    try {
        const id = parseInt(req.params.id)
        const task = await taskController.getById(id)
        if (!task){
            res.status(404).end()
        } else  {
            await taskController.remove(id)    
            res.status(200).end()
        }
    } catch(err) {
        console.log(err)
        return next(err)
    };
});

/* 
router.get('/', function(req, res, next){
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
 */
module.exports = router;
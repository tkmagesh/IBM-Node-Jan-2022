
const taskRepository = require('../repository/taskRepository')

//using async await
async function getAll(){
    const data = await taskRepository.getData()
    return data.tasks
}

async function getById(id){
    const data = await taskRepository.getData()
    const {tasks} = data;
    const task = tasks.find(task => task.id === id)
    return task;
}

async function createNew(newTask){
    const data = await taskRepository.getData()
    const {tasks} = data;
    var newTaskId = tasks.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
    newTask.id = newTaskId
    tasks.push(newTask);
    await taskRepository.saveData(tasks)
    return newTask;
}

async function save(id, taskData){
    const data = await taskRepository.getData();
    let taskList = data.tasks
    taskList = taskList.map(task => task.id === id ? taskData : task)
    await taskRepository.saveData(taskList)
    return taskData;
}

async function remove(id){
    const data = await taskRepository.getData();
    let taskList = data.tasks
    taskList = taskList.filter(task => task.id !== id)
    return taskRepository.saveData(taskList)
}

//using promises
/* 
function getAll(){
    return taskRepository.getData()
        .then(data => data.tasks)
}

function getById(id){
    return taskRepository
        .getData()
        .then(data => {
            const {tasks} = data;
            const task = tasks.find(task => task.id === id)
            return task;
        })
}

function createNew(newTask){
   return taskRepository
    .getData()
    .then(data => {
        const {tasks} = data;
        var newTaskId = tasks.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
        newTask.id = newTaskId
        tasks.push(newTask);
        return taskRepository.saveData(tasks)
            .then(() => newTask)
    })
} */

//using callbacks
/* function getAll(callback){
    taskRepository.getData(function(err, taskList){
        if (err){
            return callback(err)
        }
        return callback(null, taskList);
    })
}

function getById(id, callback){
   taskRepository.getData(function(err, taskList){
        if (err){
            return callback(err)
        }
        const task = taskList.find(task => task.id === id)
        return callback(null, task);
    })
}

function createNew(newTask, callback){
   
   taskRepository.getData(function(err, taskList){
        if (err){
            return callback(err)
        }
        var newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
        newTask.id = newTaskId

        taskList.push(newTask);
        taskRepository.saveData(taskList, function(){
            callback(null, newTask)
        });
    });
} */




var taskController = { 
    getAll : getAll,
    getById : getById,
    createNew : createNew,
    save : save,
    remove : remove
}

module.exports = taskController
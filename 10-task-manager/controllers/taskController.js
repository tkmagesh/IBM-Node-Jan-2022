
const taskRepository = require('../repository/taskRepository')
var taskList = []

//using promises
function getAll(){
    /* const p = taskRepository.getData();
    return p.then(function(data){
        return data.tasks;
    }); */
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
}

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

function save(id, taskData){
    //get the data from the file
    /* taskList = taskList.map(function(task){
        return task.id === id ? taskData : task
    }); */
    taskList = taskList.map(task => task.id === id ? taskData : task)
    //save the data in the file
}

function remove(id){
    //get the data from the file
   /*  taskList = taskList.filter(function(task){
        return task.id !== id;
    }) */
    taskList = taskList.filter(task => task.id !== id)
    //save the data in the file
}


var taskController = { 
    getAll : getAll,
    getById : getById,
    createNew : createNew,
    save : save,
    remove : remove
}

module.exports = taskController
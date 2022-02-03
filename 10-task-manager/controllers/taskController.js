var taskList = []

function getAll(){
    //get the data from the file
    return taskList;
}

function getById(id){
    //get the data from the file
   /*  return taskList.find(function(task){
        return task.id === id;
    }); */
    return taskList.find(task => task.id === id)
}

function createNew(newTask){
   /*  var newTaskId = taskList.reduce(function(result, task){
       return result > task.id ?result : task.id
   }, 0) + 1 */
   var newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
   newTask.id = newTaskId
   //get the data from the file
   taskList.push(newTask);
   //save the data in the file
   return newTask;
}

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
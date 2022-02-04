const fs = require('fs')
const path = require('path')
const dbFile = path.join(__dirname, '../data/db.json')

//using promises
function getData(){
    return new Promise(function(resolveFn, rejectFn){
        fs.readFile(dbFile, 'utf8', function(err, fileConents){
            if (err){
                return rejectFn(err)
            }
            const data = JSON.parse(fileConents);
            console.log(data);
            resolveFn(data)
        })
    })
}

function saveData(taskList){
    return new Promise(function(resolveFn, rejectFn){
        fs.writeFile(dbFile, JSON.stringify({ tasks : taskList}), function(err){
            if (err){
                return rejectFn(err)
            }
            return resolveFn()
        });
    })
} 

//using callbacks
/* 
function getData(callback){
    fs.readFile(dbFile, 'utf8', function(err, fileConents){
        if (err){
            return callback(err)
        }
        const data = JSON.parse(fileConents);
        const { tasks } = data;
        return callback(null, tasks)
    })
}

function saveData(taskList, callback){
    fs.writeFile(dbFile, JSON.stringify({ tasks : taskList}), callback);
} 
*/

module.exports = {
    getData,
    saveData
}


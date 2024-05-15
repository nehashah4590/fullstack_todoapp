const mongoose = require("mongoose");

async function connectMongoDb(uri){
     return  mongoose.connect(uri,{dbName: "todo"})
}

module.exports = {
    connectMongoDb,
} 
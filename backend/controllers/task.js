const Task = require("../models/task");
 
async function handleAddtask(req, res) {
    console.log(req.body);
    const {task }= req.body;
    const result = await Task.create({
       task
    })
    const tasks = await Task.find({});
    return res.status(201).json(tasks);
}

async function handleGettask(req, res){
    try {
        const tasks = await Task.find({});
        res.json(tasks);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
      }
}

module.exports = {
    handleAddtask,
    handleGettask,    
}
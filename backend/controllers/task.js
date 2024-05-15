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
async function handleDeletetask(req, res){
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error });
  }
}

module.exports = {
    handleAddtask,
    handleGettask,   
    handleDeletetask, 
}
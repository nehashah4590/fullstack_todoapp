const express = require('express');
const router = express.Router();
const {
    handleAddtask, 
    handleGettask,
    handleDeletetask,
 }  = require("../controllers/task")


router.post("/create_task",handleAddtask);
router.get("/tasks",handleGettask);
router.delete("/tasks/:id",handleDeletetask);


module.exports = router;
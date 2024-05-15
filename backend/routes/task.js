const express = require('express');
const router = express.Router();
const {
    handleAddtask, 
    handleGettask,
 }  = require("../controllers/task")


router.post("/create_task",handleAddtask);
router.get("/tasks",handleGettask);


module.exports = router;
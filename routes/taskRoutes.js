const express = require('express');
const router= express.Router();
const taskController = require('../controllers/taskController');
const auth= require('../middleware/authmiddleware');

router.post('/task',auth,taskController.createTask); //binding the task creation function and creating POST api.
router.get('/GetTask',auth,taskController.getTask); //binding the getting task function and creating GET api.
router.put('/tasks/:id',auth,taskController.updateTask); //binding the update task function and creating PUT api.
router.delete('/task/:id',auth,taskController.deleteTask); //binding the Delete task function and creating DELETE api.

module.exports=router;
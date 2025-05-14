const Task = require('../models/Task');
const sendEmail = require('../utils/sendEmail');

//function for creating task and sending mail
exports.createTask = async(req,res) => {
const {title, description,email} = req.body;
const task = await Task.create({title, description, user: req.user.id});

await sendEmail('Task Created',`Task : ${title} and description : ${description}`,email);
console.log('mail sent');
res.status(201).json(task);
};

//function for getting task
exports.getTask = async(req,res) => {
    const task = await Task.find({user : req.user.id});
    res.json(task);
}

//function for updating the task
exports.updateTask = async(req,res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id, user: req.user.id},req.body,{new : true});
    res.json(task);
}

//function for deleting the task
exports.deleteTask = async(req,res) => {
    await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id});
    res.json({message : 'task deleted'});
}
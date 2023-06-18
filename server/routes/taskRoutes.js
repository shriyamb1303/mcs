const express = require('express');
const router = express.Router();
const app = express();
const taskModel = require('../models/Task');

router.get('/gettasks', async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.json(tasks);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
})

router.get('/taskpage/:id', async (req, res) => {
    try {
        const task = await taskModel.findById(req.params.id);
        res.json(task);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
})

router.post('/addtask', async (req, res) => {
    try {
        const task = new taskModel({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        });
        await task.save();
        res.json(task);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
})

router.put('/updatetask/:id', async (req, res) => {
    const task = req.body;
    const editedTask = await taskModel.findByIdAndUpdate(req.params.id, task);
    res.json(editedTask);
})

router.put('/updatetaskstatus/:id', async (req, res) => {
    // const task = req.body;
    const editedTask = await taskModel.findById(req.params.id);
    if (editedTask.status == true) {
        editedTask.status = false;
    } else {
        editedTask.status = true;
    }
    await editedTask.save();
    res.json(editedTask);
})

router.delete('/deletetask/:id', async (req, res) => {
    const deleteTask = await taskModel.findByIdAndDelete(req.params.id);
    res.json(deleteTask);
})

module.exports = router;
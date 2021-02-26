const express = require('express');
const task = require('../models/task');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);


});

 router.post('/quantity', (req,res) =>{
    const star = req.body.stars;
    task.find({stars:{$in:star}}, (err,data)=>{
        
        if(!err){
            res.status(200).send(data)
        }else{
            console.log(err)
        }
    })
})
router.post('/quantityna', (req,res) =>{
    const  names = req.body.name;
    task.find({name:{$in:names}}, (err,data)=>{
        
        if(!err){
            res.status(200).send(data)
        }else{
            console.log(err)
        }
    })
})
router.get('/:id', async (req, res) => {
    Task.findById(req.params.id);
    res.json(task);



})

router.post('/', async (req, res) => {
    const { id, name, stars, price, image, amenities } = req.body;
    const tasks = new Task({ id, name, stars, price, image, amenities });
    await tasks.save();
    res.json('received');

});


//
router.put('/:id', async (req, res) => {
    const { id, name, stars, price, image, amenities } = req.body;
    const newTask = { id, name, stars, price, image, amenities };
    console.log(req.params.id);
    await task.findByIdAndUpdate(req.params.id, newTask);

    res.json('ok');
});

//Eliminar
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json('se elimino');


});
module.exports = router;
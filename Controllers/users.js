//imports
const express = require('express');
const User = require('../Models/user');
const router = express.Router();
//read
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});
//create
router.post('/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
});
//update
router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(user);
});
//delete
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'User apagado' });
});
//disponibilização externa da rota
module.exports = router;
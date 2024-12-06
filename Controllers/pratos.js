//imports
const express = require('express');
const Prato = require('../Models/prato');
const router = express.Router();
//read
router.get('/', async (req, res) => {
    const pratos = await Prato.find().populate('restaurante');
    res.json(pratos);
});
//create
router.post('/', async (req, res) => {
    const prato = new Prato(req.body);
    await prato.save();
    res.status(201).json(prato);
});
//update
router.put('/:id', async (req, res) => {
    const prato = await Prato.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(prato);
});
//delete
router.delete('/:id', async (req, res) => {
    await Prato.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Prato apagado' });
});
//disponibilização externa da rota
module.exports = router;
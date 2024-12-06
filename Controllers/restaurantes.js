//imports
const express = require('express');
const Restaurante = require('../Models/restaurante');
const router = express.Router();
//read
router.get('/', async (req, res) => {
    const restaurantes = await Restaurante.find();
    res.json(restaurantes);
});
//create
router.post('/', async (req, res) => {
    const restaurante = new Restaurante(req.body);
    await restaurante.save();
    res.status(201).json(restaurante);
});
//update
router.put('/:id', async (req, res) => {
    const restaurante = await Restaurante.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(restaurante);
});
//delete
router.delete('/:id', async (req, res) => {
    await Restaurante.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Restaurante apagado' });
});
//disponibilização externa da rota
module.exports = router;
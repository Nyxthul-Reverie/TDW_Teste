//importação mongoose
const mongoose = require('mongoose');
//definição do schema, devem adicionar mensagens de validação
const RestauranteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    localizacao: String,
});
//disponibilização para modulos externos do schema
module.exports = mongoose.model('Restaurante', RestauranteSchema);
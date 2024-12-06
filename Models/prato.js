//importação mongoose
const mongoose = require('mongoose');
//definição do schema, devem adicionar mensagens de validação
const PratoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true, min: 0 },
    restaurante: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurante' },
});
//disponibilização para modulos externos do schema
module.exports = mongoose.model('Prato', PratoSchema);
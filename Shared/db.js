// Importação do mongoose
const mongoose = require('mongoose');

const connectToDb = () => {
    return mongoose.connect('mongodb://Ricardo:ricardo@teste-shard-00-00.vkrk1.mongodb.net:27017,teste-shard-00-01.vkrk1.mongodb.net:27017,teste-shard-00-02.vkrk1.mongodb.net:27017/?ssl=true&replicaSet=atlas-l7qu0j-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Teste', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

// Sucesso
mongoose.connection.on('connected', () => {
    console.log('Conectado ao MongoDB');
});

// Erro
mongoose.connection.on('error', (err) => {
    console.error('Erro na conexão ao MongoDB:', err);
});

// Exportar a função de conexão
module.exports = connectToDb;
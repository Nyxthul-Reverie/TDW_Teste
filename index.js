//require express
const express = require('express');
const connectToDb = require('./Shared/db');
const logger = require('./Middlewares/logger');
const auth = require('./Middlewares/auth');
//import do controlador Pratos
const pratosRoutes = require('./Controllers/pratos');
const restauranteRoutes = require('./Controllers/restaurantes');
const userRoutes = require('./Controllers/users');

//Definições base
const app = express();
const PORT = 3000;

// Middleware para análise de JSON
app.use(express.json());
app.use(logger);
app.use('/pratos', auth);
app.use('/restaurantes', auth);
app.use('/users', auth);
//definição da rota para controlador Pratos
app.use('/pratos', pratosRoutes);
app.use('/restaurantes', restauranteRoutes);
app.use('/users', userRoutes);

connectToDb().then(() => {
    // Rota básica para teste
    app.get('/', (req, res) => {
        res.send('Servidor funcionando!');
    });
    // Iniciar o servidor
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch((err) => {
    console.error('Erro na conexão ao MongoDB:', err);
});


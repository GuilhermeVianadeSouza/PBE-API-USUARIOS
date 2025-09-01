
//Importa o módulo do Express
const express = require('express');

//Importar as rotas de usuário
const userRoutes = require('./src/routes/userRoutes');

//Criar uma aplicação express
const app = express();

//Definir um Middleware para analisar Json no corpo das requisições
app.use(express.json);

//Definir a porta em que o servidor irá escutar
const porta = 8000;

//Rota de Teste de API
app.get('/', (req, res) =>{
    res.send("API de Usuários está funcionando");
})

//Usando as rotas de usuario
app.use('/api/users', userRoutes);

//Iniciar o servidor no ar
app.listen(porta, ()=>{
    console.log(`Servidor rodando em http://localhost:${porta}`);
})
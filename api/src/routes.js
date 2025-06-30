const express = require('express');
const rota = express.Router();

const usuario = require('./controllers/usuario');
const produto = require('./controllers/produto');
const pedido = require('./controllers/pedido');

// Rotas de usuário
rota.post('/usuarios', usuario.create);
rota.post('/login', usuario.login);

// Rotas de produtos
rota.get('/produtos', produto.listar);
rota.post('/produtos', produto.create);

// Rotas de pedidos
rota.post('/pedidos', pedido.create);
rota.get('/pedidos', pedido.listar);

module.exports = rota;

const express = require('express');
const rota = express.Router();

const usuario = require('./controllers/usuario');
const produto = require('./controllers/produto');
const pedido = require('./controllers/pedido');

// Usuário
rota.post('/usuarios', usuario.create);
rota.post('/login', usuario.login);

// Produto
rota.get('/produtos', produto.listar);
rota.post('/produtos', produto.create);

// Pedido
rota.post('/pedidos', pedido.create);
rota.get('/pedidos', pedido.listar);

module.exports = rota;

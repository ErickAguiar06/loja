const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const produto = {
    async create(req, res) {
        const { nome, descricao, preco, imagem, categoria } = req.body;

        try {
            const newProduct = await prisma.produto.create({
                data: { nome, descricao, preco, imagem, categoria }
            });
            res.json(newProduct);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async listar(req, res) {
        try {
            const produtos = await prisma.produto.findMany();
            res.json(produtos);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = produto;

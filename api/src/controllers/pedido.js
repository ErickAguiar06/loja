const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const pedido = {
    async create(req, res) {
        const { usuarioId, itens } = req.body;

        try {
            const novoPedido = await prisma.pedido.create({
                data: {
                    usuarioId,
                    itens: {
                        create: itens.map(item => ({
                            produtoId: item.produtoId,
                            quantidade: item.quantidade
                        }))
                    }
                },
                include: {
                    itens: true
                }
            });

            res.json(novoPedido);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async listar(req, res) {
        try {
            const pedidos = await prisma.pedido.findMany({
                include: {
                    usuario: true,
                    itens: {
                        include: { produto: true }
                    }
                }
            });

            res.json(pedidos);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = pedido;

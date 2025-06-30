const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const usuario = {
    async create(req, res) {
        const { nome, email, senha } = req.body;
        const user = await prisma.usuario.create({
            data: { nome, email, senha }
        });
        res.json(user);
    },

    async login(req, res) {
        const { email, senha } = req.body;
        const user = await prisma.usuario.findUnique({
            where: { email }
        });

        if (!user || user.senha !== senha) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        res.json({ message: 'Login bem-sucedido', user });
    }
};

module.exports = usuario;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando o Seed...');

  // Criar categorias
  const categorias = await prisma.categoria.createMany({
    data: [
      { nome: 'Tênis' },
      { nome: 'Camisas' },
      { nome: 'Calças' },
      { nome: 'Shorts' },
      { nome: 'Perfumes' },
    ],
  });

  console.log('✅ Categorias inseridas');

  // Buscar categorias para pegar os IDs
  const tenis = await prisma.categoria.findFirst({ where: { nome: 'Tênis' } });
  const camisas = await prisma.categoria.findFirst({ where: { nome: 'Camisas' } });
  const calcas = await prisma.categoria.findFirst({ where: { nome: 'Calças' } });
  const shorts = await prisma.categoria.findFirst({ where: { nome: 'Shorts' } });
  const perfumes = await prisma.categoria.findFirst({ where: { nome: 'Perfumes' } });

  // Criar produtos
  await prisma.produto.createMany({
    data: [
      // Tênis
      {
        nome: 'Tênis Nike Air Force',
        descricao: 'Tênis branco casual da Nike',
        preco: 499.99,
        imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRgszEUa4_UDrzKNFRggm75Lum_aYF7UvEMpLSaFNAfqAxxI2OCZ36GMasNxymd8fKngXcZ6dlAFjYZu4mDdicCIxWNR9LWkWwcT2ZEQEIMoKsHI63tnsGfYdWaxje3R0LmcvWSTQ&usqp=CAc',
        categoriaId: tenis.id,
      },
      {
        nome: 'Tênis Adidas Ultraboost',
        descricao: 'Tênis esportivo super confortável',
        preco: 699.99,
        imagem: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGj2fyGswsQglCzCQtaPRxXLk0MuxhlS_jToslJK3X0MfXx99sOY9fLnbH0cTA0Q86XQndrP4Lf3C5l69O9sNNXQV4ExcmpK9nXCRJd2VC4cmzWtviRT0biXMIeSsrJz6VyeYBCG9O9Q&usqp=CAc',
        categoriaId: tenis.id,
      },

      // Camisas
      {
        nome: 'Camisa Polo Lacoste',
        descricao: 'Camisa polo azul premium',
        preco: 249.90,
        imagem: '/polo.webp',
        categoriaId: camisas.id,
      },
      {
        nome: 'Camisa Nike DryFit',
        descricao: 'Camisa esportiva respirável',
        preco: 149.90,
        imagem: '/dryfit.webp',
        categoriaId: camisas.id,
      },

      // Calças
      {
        nome: 'Calça Jeans Levis',
        descricao: 'Calça jeans azul tradicional',
        preco: 299.99,
        imagem: '/jeans.jpg',
        categoriaId: calcas.id,
      },
      {
        nome: 'Calça Jogger Adidas',
        descricao: 'Calça preta esportiva',
        preco: 199.99,
        imagem: '/jogger.webp',
        categoriaId: calcas.id,
      },

      // Shorts
      {
        nome: 'Short Nike Flex',
        descricao: 'Short esportivo leve',
        preco: 129.99,
        imagem: '/nikeshorts.webp',
        categoriaId: shorts.id,
      },
      {
        nome: 'Short Jeans Colcci',
        descricao: 'Short jeans azul claro feminino',
        preco: 159.99,
        imagem: '/shorts-feminino.webp',
        categoriaId: shorts.id,
      },

      // Perfumes
      {
        nome: 'Perfume Sauvage Dior',
        descricao: 'Perfume masculino 100ml',
        preco: 749.90,
        imagem: '/sauvage.webp',
        categoriaId: perfumes.id,
      },
      {
        nome: 'Perfume Invictus Paco Rabanne',
        descricao: 'Perfume masculino 100ml',
        preco: 699.90,
        imagem: '/invictus.webp',
        categoriaId: perfumes.id,
      },
    ],
  });

  console.log('✅ Produtos inseridos');
}

main()
  .then(() => {
    console.log('🌱 Seed finalizado');
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

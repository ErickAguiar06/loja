'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
};

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const searchParams = useSearchParams();
  const categoria = searchParams.get('categoria');

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const res = await fetch('https://loja-virtual-294l.onrender.com/produtos');
        const data = await res.json();

        const produtosFiltrados = categoria
          ? data.filter((p: Produto) => p.categoria.toLowerCase() === categoria.toLowerCase())
          : data;

        setProdutos(produtosFiltrados);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, [categoria]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        {categoria ? `Categoria: ${categoria}` : 'Todos os Produtos'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="border rounded-lg p-4 shadow-md hover:scale-105 transition-transform"
          >
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={300}
              height={300}
              className="rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{produto.nome}</h2>
            <p className="text-gray-600">{produto.descricao}</p>
            <p className="font-bold text-lg mt-2">R$ {produto.preco.toFixed(2)}</p>
            <button
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function adicionarAoCarrinho(produto: Produto) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');

  const itemExistente = carrinho.find((item: Produto) => item.id === produto.id);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert('Produto adicionado ao carrinho!');
}

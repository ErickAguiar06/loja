"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

// Mock de produtos (substitua depois por fetch da API)
const produtos = [
  { id: 1, nome: "Camisa Polo", preco: 99.9, imagem: "/camisa.webp", descricao: "Camisa polo confortável e estilosa." },
  { id: 2, nome: "Calça Jeans", preco: 149.9, imagem: "/calca.webp", descricao: "Calça jeans de alta qualidade." },
  { id: 3, nome: "Tênis Esportivo", preco: 199.9, imagem: "/tenis.jpg", descricao: "Tênis esportivo para todas as ocasiões." },
];

export default function ProdutoDetalhePage() {
  const params = useParams();
  const id = Number(params.id);
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Produto não encontrado.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-16">
      <img src={produto.imagem} alt={produto.nome} className="w-60 h-60 object-cover mb-6 rounded" />
      <h1 className="text-3xl font-bold mb-2">{produto.nome}</h1>
      <p className="text-lg mb-4">{produto.descricao}</p>
      <p className="text-2xl font-bold mb-6">R$ {produto.preco.toFixed(2)}</p>
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition mb-4">
        Adicionar ao carrinho
      </button>
      <Link href="/produtos" className="text-blue-600 hover:underline">
        Voltar para produtos
      </Link>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import CardProduto from "@/components/CardProduto";
import {Navbar} from "@/components/Navbar";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
}

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Todos os Produtos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </section>
    </main>
  );
}

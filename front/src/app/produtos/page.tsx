"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
};

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/produtos") // ajuste a URL para sua API
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">
          Todos os Produtos
        </h1>

        {loading ? (
          <p className="text-center">Carregando...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="border rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-40 h-40 object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{produto.nome}</h2>
                <p className="text-lg font-bold mb-4">
                  R$ {produto.preco.toFixed(2)}
                </p>
                <Link href={`/produtos/${produto.id}`}>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                    Ver detalhes
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

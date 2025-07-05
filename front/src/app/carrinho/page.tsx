"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  quantidade: number;
};

export default function CarrinhoPage() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  useEffect(() => {
    const itens = localStorage.getItem("carrinho");
    if (itens) {
      setCarrinho(JSON.parse(itens));
    }
  }, []);

  function removerItem(id: number) {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  function alterarQuantidade(id: number, quantidade: number) {
    const novoCarrinho = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade } : item
    );
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <main className="min-h-screen bg-white py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Seu Carrinho</h1>
      {carrinho.length === 0 ? (
        <div className="text-center">
          <p>Seu carrinho está vazio.</p>
          <Link href="/produtos" className="text-blue-600 hover:underline">
            Ver produtos
          </Link>
        </div>
      ) : (
        <div>
          <ul>
            {carrinho.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.nome}</p>
                    <p className="text-sm text-gray-500">
                      R$ {item.preco.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      alterarQuantidade(item.id, Math.max(1, item.quantidade - 1))
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantidade}</span>
                  <button
                    onClick={() =>
                      alterarQuantidade(item.id, item.quantidade + 1)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removerItem(item.id)}
                    className="ml-4 text-red-600 hover:underline"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right mt-8">
            <p className="text-xl font-bold">Total: R$ {total.toFixed(2)}</p>
            <Link href="/checkout">
              <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                Finalizar compra
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
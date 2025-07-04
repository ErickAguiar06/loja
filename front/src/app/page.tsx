import { CategoriaCard } from "@/components/CategoriaCard";
import Link from "next/link";

export default function Home() {
  const categorias = [
    { nome: "Camisas", imagem: "/camisa.webp", link: "/produtos?categoria=camisa" },
    { nome: "Calças", imagem: "/calca.webp", link: "/produtos?categoria=calca" },
    { nome: "Shorts", imagem: "/shorts.webp", link: "/produtos?categoria=short" },
    { nome: "Tênis", imagem: "/tenis.jpg", link: "/produtos?categoria=tenis" },
    { nome: "Perfumes", imagem: "/perfume.jpg", link: "/produtos?categoria=perfume" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Banner de destaque */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Loja Virtual Aguiar</h1>
        <p className="text-xl mb-8">As melhores roupas, calçados e perfumes para você</p>
        <Link href="/produtos">
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Ver Produtos
          </button>
        </Link>
      </section>

      {/* Categorias */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Categorias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categorias.map((cat) => (
            <CategoriaCard
              key={cat.nome}
              nome={cat.nome}
              imagem={cat.imagem}
              link={cat.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

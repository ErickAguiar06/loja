import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner ou destaque */}
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
          {[
            { nome: 'Camisas', imagem: '/camisa.webp', link: '/produtos?categoria=camisa' },
            { nome: 'Calças', imagem: '/calca.webp', link: '/produtos?categoria=calca' },
            { nome: 'Shorts', imagem: '/shorts.webp', link: '/produtos?categoria=short' },
            { nome: 'Tênis', imagem: '/tenis.jpg', link: '/produtos?categoria=tenis' },
            { nome: 'Perfumes', imagem: '/perfume.jpg', link: '/produtos?categoria=perfume' },
          ].map((cat) => (
            <Link href={cat.link} key={cat.nome}>
              <div className="border rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer">
                <img src={cat.imagem} alt={cat.nome} className="w-full h-60 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{cat.nome}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

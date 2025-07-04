'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          Loja Aguiar
        </Link>

        {/* Menu */}
        <nav className="space-x-6 text-gray-700 text-lg">
          <Link href="/produtos" className="hover:text-black transition">
            Produtos
          </Link>
          <Link href="/sobre" className="hover:text-black transition">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-black transition">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

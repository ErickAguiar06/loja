'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <span className="text-2xl font-bold">Loja Aguiar</span>
      </Link>

      <ul className="flex space-x-6">
        <li>
          <Link href="/produtos">Produtos</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

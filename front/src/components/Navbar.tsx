"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Loja Virtual Aguiar
      </Link>
      <div className="flex gap-6">
        <Link href="/produtos" className="hover:underline">
          Produtos
        </Link>
        <Link href="/carrinho" className="hover:underline">
          Carrinho
        </Link>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';

interface CategoriaCardProps {
  nome: string;
  imagem: string;
  link: string;
}

export function CategoriaCard({ nome, imagem, link }: CategoriaCardProps) {
  return (
    <Link href={link}>
      <div className="border rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer">
        <img src={imagem} alt={nome} className="w-full h-60 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold">{nome}</h3>
        </div>
      </div>
    </Link>
  );
}

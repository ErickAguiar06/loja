'use client'

import Image from 'next/image';
import Link from 'next/link';

interface ProdutoProps {
  produto: {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
  };
}

export default function CardProduto({ produto }: ProdutoProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-4 flex flex-col">
      <Link href={`/produto/${produto.id}`} className="flex flex-col items-center">
        <Image
          src={produto.imagem}
          alt={produto.nome}
          width={300}
          height={300}
          className="object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-4 text-center">{produto.nome}</h3>
        <p className="text-sm text-gray-600 mt-2 text-center line-clamp-2">{produto.descricao}</p>
        <span className="mt-2 text-green-600 font-bold text-lg">
          R$ {produto.preco.toFixed(2)}
        </span>
      </Link>
    </div>
  );
}

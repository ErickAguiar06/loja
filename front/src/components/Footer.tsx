export function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <span className="font-bold text-lg">Loja Virtual Aguiar</span>
        <span className="text-sm mt-2 sm:mt-0">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
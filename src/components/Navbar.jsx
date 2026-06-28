// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-azul-booknet shadow-md py-4">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        {/* Usamos <Link> em vez de <a> para não recarregar a SPA */}
        <Link to="/" className="text-white text-xl font-bold flex items-center gap-2">
          <i className="fas fa-book-open"></i> Book.Net
        </Link>
        <ul className="flex gap-6 list-none">
          <li>
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/livros" className="text-white hover:text-gray-200 transition-colors">
              Livros
            </Link>
          </li>
          <li>
            <Link to="/novo-livro" className="text-white hover:text-gray-200 transition-colors">
              Novo Livro
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
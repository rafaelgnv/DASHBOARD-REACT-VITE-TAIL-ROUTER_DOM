import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importando a nova Navbar
import { Navbar } from './components/Navbar';

// Importando as páginas
import { Dashboard } from './pages/Dashboard';
import { Acervo } from './pages/Acervo';
import { CadastrarLivro } from './pages/CadastrarLivro';

export function App() {
  return (
    <BrowserRouter>
      {/* A Navbar fica aqui, fora do Routes, para ser fixa */}
      <Navbar />
      
      {/* O Routes é o local onde o conteúdo da página muda */}
      <div className="max-w-7xl mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/livros" element={<Acervo />} />
          <Route path="/novo-livro" element={<CadastrarLivro />} />
          {/* Nova Rota Dinâmica para Edição */}
          <Route path="/editar-livro/:id" element={<CadastrarLivro />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
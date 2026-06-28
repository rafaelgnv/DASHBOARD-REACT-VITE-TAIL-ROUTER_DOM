import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Acervo() {
    // 1. O Estado que guarda a nossa lista de livros
    const [livros, setLivros] = useState([]);

    // 2. O Efeito que roda UMA VEZ quando a página abre para buscar os dados
    useEffect(() => {
        const acervoSalvo = JSON.parse(localStorage.getItem('acervoLivros')) || [];
        setLivros(acervoSalvo);
    }, []);

    // 3. Função de Excluir super inteligente
    const excluirLivro = (id) => {
        if (window.confirm('Deseja realmente excluir este livro do acervo?')) {
            // Filtra a lista, removendo apenas o livro com o ID escolhido
            const novaLista = livros.filter(livro => livro.id !== id);

            // Atualiza a tela instantaneamente (sem recarregar a página!)
            setLivros(novaLista);

            // Atualiza o banco de dados (LocalStorage)
            localStorage.setItem('acervoLivros', JSON.stringify(novaLista));
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto mb-10">

            {/* Cabeçalho Flexível */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl text-gray-800">Acervo de Livros</h2>
                <Link to="/novo-livro" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-semibold flex items-center gap-2 transition-colors shadow">
                    <i className="fas fa-plus"></i> Novo Livro
                </Link>
            </div>

            {/* A Caixa Branca da Tabela */}
            <div className="bg-white rounded shadow overflow-x-auto">
                <table className="w-full text-left border-collapse">

                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="p-4 font-semibold text-gray-600">ID</th>
                            <th className="p-4 font-semibold text-gray-600">ISBN</th>
                            <th className="p-4 font-semibold text-gray-600">Título</th>
                            <th className="p-4 font-semibold text-gray-600">Autor</th>
                            <th className="p-4 font-semibold text-gray-600">Assunto</th>
                            <th className="p-4 font-semibold text-gray-600">Qtd.</th>
                            <th className="p-4 font-semibold text-gray-600 text-center">Ações</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {/* O .map() varre a lista de livros e transforma cada um em uma linha (<tr>).
                            O React exige uma "key" única para não se perder na hora de excluir ou editar. 
                        */}
                        {livros.length > 0 ? (
                            livros.map((livro) => (
                                <tr key={livro.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 text-sm text-gray-500">{livro.id}</td>
                                    <td className="p-4 text-sm font-semibold text-gray-700">{livro.isbn}</td>
                                    <td className="p-4 text-sm text-gray-900">{livro.titulo}</td>
                                    <td className="p-4 text-sm text-gray-600">{livro.autor}</td>
                                    <td className="p-4 text-sm text-gray-600">{livro.assunto}</td>
                                    {/* O Operador Ternário dentro do JSX para mudar a cor se for zero */}
                                    <td className={`p-4 text-sm text-center font-bold ${Number(livro.quantidade) === 0 ? 'text-red-500' : 'text-gray-700'}`}>
                                        {livro.quantidade}
                                    </td>
                                    <td className="p-4 text-center">
                                        <Link to={`/editar-livro/${livro.id}`} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded text-xs transition-colors inline-flex items-center justify-center mr-1" title="Editar">
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                        {/* Passamos uma Arrow Function no onClick para enviar o ID correto */}
                                        <button
                                            onClick={() => excluirLivro(livro.id)}
                                            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded text-xs transition-colors inline-flex items-center justify-center"
                                            title="Excluir"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="p-8 text-center text-gray-500">
                                    Nenhum livro cadastrado no acervo ainda.
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
}
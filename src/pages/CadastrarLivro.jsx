import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function CadastrarLivro() {
    const navigate = useNavigate();
    // Captura o ID da URL (se existir)
    const { id } = useParams();

    const [livro, setLivro] = useState({
        isbn: '', titulo: '', autor: '', editora: '', ano: '', assunto: '',
        quantidade: '', servePara: '', origem: '', precoVenda: '', precoAluguel: '', taxaRenovacao: ''
    });

    // Se houver um ID na URL, busca os dados do LocalStorage e preenche a tela
    useEffect(() => {
        if (id) {
            const acervo = JSON.parse(localStorage.getItem('acervoLivros')) || [];
            // O mesmo Number() que usamos antes para evitar bugs de tipo!
            const livroEncontrado = acervo.find(l => Number(l.id) === Number(id));

            if (livroEncontrado) {
                setLivro(livroEncontrado);
            }
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLivro({ ...livro, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const acervoAntigo = JSON.parse(localStorage.getItem('acervoLivros')) || [];

        if (id) {
            // MODO EDIÇÃO: Atualiza o livro existente
            const acervoAtualizado = acervoAntigo.map(l =>
                Number(l.id) === Number(id) ? livro : l
            );
            localStorage.setItem('acervoLivros', JSON.stringify(acervoAtualizado));
            alert('Livro atualizado com sucesso!');
        } else {
            // MODO CRIAÇÃO: Grava um livro novo
            const novoLivro = { ...livro, id: Date.now() };
            localStorage.setItem('acervoLivros', JSON.stringify([...acervoAntigo, novoLivro]));
            alert('Novo livro gravado com sucesso!');
        }

        navigate('/livros');
    };

    // Textos dinâmicos para a interface
    const tituloPagina = id ? "Editar Livro" : "Cadastro de Novo Livro";
    const textoBotao = id ? "Atualizar Livro" : "Gravar Livro";
    const iconeBotao = id ? "fas fa-sync-alt" : "fas fa-save";

    return (
        <div className="p-6 max-w-7xl mx-auto mb-10">
            <div className="mb-6">
                {/* O título muda dinamicamente! */}
                <h2 className="text-3xl text-gray-800 mb-1">{tituloPagina}</h2>
                <p className="text-gray-500 text-sm">Os campos marcados com <span className="text-red-500 font-bold">*</span> são obrigatórios.</p>
            </div>

            <div className="bg-white p-8 rounded shadow">
                <form onSubmit={handleSubmit}>

                    <h3 className="text-azul-booknet text-lg font-semibold border-b border-gray-200 pb-2 mb-6">Informações Básicas</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">ISBN <span className="text-red-500">*</span></label>
                            <input type="text" name="isbn" value={livro.isbn} onChange={handleInputChange} placeholder="Ex: 978-85-..." required
                                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-azul-booknet focus:ring-4 focus:ring-azul-booknet/20 transition-all" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Nome do Livro <span className="text-red-500">*</span></label>
                            <input type="text" name="titulo" value={livro.titulo} onChange={handleInputChange} required
                                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-azul-booknet focus:ring-4 focus:ring-azul-booknet/20 transition-all" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Autor(es) <span className="text-red-500">*</span></label>
                            <input type="text" name="autor" value={livro.autor} onChange={handleInputChange} required
                                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-azul-booknet focus:ring-4 focus:ring-azul-booknet/20 transition-all" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Editora <span className="text-red-500">*</span></label>
                            <input type="text" name="editora" value={livro.editora} onChange={handleInputChange} placeholder="Ex: Editora IFMA" required
                                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-azul-booknet focus:ring-4 focus:ring-azul-booknet/20 transition-all" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Ano de Publicação <span className="text-red-500">*</span></label>
                            <input type="number" name="ano" value={livro.ano} onChange={handleInputChange} required
                                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-azul-booknet focus:ring-4 focus:ring-azul-booknet/20 transition-all" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Assunto <span className="text-red-500">*</span></label>
                            <select name="assunto" value={livro.assunto} onChange={handleInputChange} required
                                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-azul-booknet focus:ring-4 focus:ring-azul-booknet/20 transition-all bg-white">
                                <option value="" disabled>Selecione...</option>
                                <option value="Desenvolvimento">Desenvolvimento</option>
                                <option value="Redes">Redes</option>
                                <option value="Banco de Dados">Banco de Dados</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Quantidade <span className="text-red-500">*</span></label>
                            <input type="number" name="quantidade" value={livro.quantidade} onChange={handleInputChange} required
                                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-azul-booknet focus:ring-4 focus:ring-azul-booknet/20 transition-all" />
                        </div>
                    </div>

                    <h3 className="text-azul-booknet text-lg font-semibold border-b border-gray-200 pb-2 mb-6">Classificação e Preços</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Para que serve? <span className="text-red-500">*</span></label>
                            <div className="flex items-center gap-4 h-full">
                                <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                                    <input type="radio" name="servePara" value="venda" checked={livro.servePara === 'venda'} onChange={handleInputChange} required className="w-4 h-4 text-azul-booknet" /> Venda
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                                    <input type="radio" name="servePara" value="aluguel" checked={livro.servePara === 'aluguel'} onChange={handleInputChange} className="w-4 h-4 text-azul-booknet" /> Aluguel
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-600 mb-2">Origem <span className="text-red-500">*</span></label>
                            <div className="flex items-center gap-4 h-full">
                                <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                                    <input type="radio" name="origem" value="nacional" checked={livro.origem === 'nacional'} onChange={handleInputChange} required className="w-4 h-4 text-azul-booknet" /> Nacional
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                                    <input type="radio" name="origem" value="importado" checked={livro.origem === 'importado'} onChange={handleInputChange} className="w-4 h-4 text-azul-booknet" /> Importado
                                </label>
                            </div>
                        </div>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {livro.servePara === 'venda' && (
                            <div className="flex flex-col animate-fade-in">
                                <label className="text-sm font-semibold text-gray-600 mb-2">Preço de Venda (R$) <span className="text-red-500">*</span></label>
                                <input type="number" step="0.01" name="precoVenda" value={livro.precoVenda} onChange={handleInputChange} placeholder="Ex: 45.90" required
                                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-azul-booknet focus:ring-4 focus:ring-azul-booknet/20 transition-all" />
                            </div>
                        )}

                        {livro.servePara === 'aluguel' && (
                            <div className="flex flex-col animate-fade-in">
                                <label className="text-sm font-semibold text-gray-600 mb-2">Preço de Aluguel (R$) <span className="text-red-500">*</span></label>
                                <input type="number" step="0.01" name="precoAluguel" value={livro.precoAluguel} onChange={handleInputChange} placeholder="Ex: 15.00" required
                                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-azul-booknet focus:ring-4 focus:ring-azul-booknet/20 transition-all" />
                            </div>
                        )}
                    </div>
                    

                    <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-gray-100">
                        <button type="button" onClick={() => navigate('/livros')} className="px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded border hover:bg-gray-200 transition-colors">
                            Cancelar
                        </button>
                        <button type="submit" className="px-6 py-2 bg-azul-booknet text-white font-semibold rounded hover:bg-blue-700 transition-colors flex items-center gap-2">
                            {/* O ícone e o texto mudam dinamicamente! */}
                            <i className={iconeBotao}></i> {textoBotao}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
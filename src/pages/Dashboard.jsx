// src/pages/Dashboard.jsx
import { CartaoEstatistica } from '../components/CartaoEstatistica';
import { BotaoAcao } from '../components/BotaoAcao';

export function Dashboard() {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            
            <h2 className="text-3xl text-gray-800 mb-6">Painel Administrativo</h2>

            {/* Grelha de Cartões Estatísticos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                <CartaoEstatistica corFundo="bg-[#2e8b57]" numero="150" texto="Livros Alugados" icone="fa-book-reader" />
                <CartaoEstatistica corFundo="bg-[#d9534f]" numero="24" texto="Devoluções Atrasadas" icone="fa-exclamation-triangle" />
                <CartaoEstatistica corFundo="bg-[#5bc0de]" numero="850" texto="Clientes Cadastrados" icone="fa-users" />
                <CartaoEstatistica corFundo="bg-[#f0ad4e]" numero="12" texto="Reservas Pendentes" icone="fa-calendar-check" />
            </div>

            {/* Grelha de Botões de Ação */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <BotaoAcao icone="fa-users" texto="CLIENTES" linkTo="/" />
                <BotaoAcao icone="fa-book" texto="CADASTRAR LIVRO" linkTo="/novo-livro" />
                <BotaoAcao icone="fa-list" texto="ACERVO" linkTo="/livros" />
                <BotaoAcao icone="fa-shopping-cart" texto="VENDAS" linkTo="/" />
            </div>

        </div>
    );
}
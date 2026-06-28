// src/components/CartaoEstatistica.jsx

// O componente recebe "props" (propriedades) para ser customizável
export function CartaoEstatistica({ corFundo, numero, texto, icone }) {
    return (
        <div className={`${corFundo} rounded text-white relative overflow-hidden shadow flex flex-col justify-between p-5 h-32`}>
            
            {/* O Ícone de Marca D'água */}
            <i className={`fas ${icone} absolute top-4 right-4 text-6xl text-black opacity-15 z-0 transition-transform duration-300 hover:scale-110`}></i>
            
            {/* O Conteúdo Principal */}
            <div className="z-10 relative">
                <h3 className="text-4xl font-bold">{numero}</h3>
                <p className="text-sm mt-1">{texto}</p>
            </div>
            
            {/* Link de Mais info (simulado) */}
            <a href="#" className="z-10 relative text-xs text-white/80 hover:text-white flex items-center gap-1 mt-4">
                Mais info <i className="fas fa-arrow-circle-right"></i>
            </a>
            
        </div>
    );
}
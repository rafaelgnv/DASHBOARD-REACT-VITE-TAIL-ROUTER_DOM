// src/components/BotaoAcao.jsx
import { Link } from 'react-router-dom';

export function BotaoAcao({ icone, texto, linkTo }) {
    return (
        <Link 
            to={linkTo} 
            className="flex h-20 bg-white shadow hover:shadow-md hover:-translate-y-1 transition-all duration-200 rounded overflow-hidden"
        >
            <div className="w-20 bg-[#5bc0de] text-white text-3xl flex items-center justify-center">
                <i className={`fas ${icone}`}></i>
            </div>
            <div className="flex-1 flex items-center justify-center font-bold text-[#337ab7] text-sm md:text-base">
                {texto}
            </div>
        </Link>
    );
}
import { Heart, Shield, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          
          {/* Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Receitas Vida Saudável</h3>
            <p className="text-gray-400">
              Transformando vidas através de uma alimentação saudável e saborosa
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center space-x-8 mb-8">
            <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre o Ebook</a>
            <a href="#detalhes" className="text-gray-400 hover:text-white transition-colors">Detalhes</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            <a href="#comprar" className="text-gray-400 hover:text-white transition-colors">Comprar</a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center space-x-8 mb-8 text-sm">
            <div className="flex items-center text-gray-400">
              <Shield className="h-4 w-4 mr-2" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Mail className="h-4 w-4 mr-2" />
              <span>Suporte Exclusivo</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Heart className="h-4 w-4 mr-2" />
              <span>+2.763 Vidas Transformadas</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Receitas Vida Saudável | Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Esta página utiliza cookies para melhorar sua experiência de navegação.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
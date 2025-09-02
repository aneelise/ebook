import React, { useState, useEffect } from 'react';
import { Clock, Flame, Users, AlertTriangle } from 'lucide-react';

export default function Urgency() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPurchase = () => {
    const element = document.getElementById('comprar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          
          {/* Main Alert */}
          <div className="inline-flex items-center bg-red-600/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Flame className="h-5 w-5 text-yellow-300 mr-2 animate-pulse" />
            <span className="font-bold text-sm uppercase tracking-wide">Oferta por Tempo Limitado</span>
          </div>

          <h2 className="text-xl md:text-2xl mb-8 opacity-90">
            Não perca esta oportunidade única de transformar sua alimentação
          </h2>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-12">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">HORAS</div>
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold">:</div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">MINUTOS</div>
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold">:</div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">SEGUNDOS</div>
              </div>
            </div>
          </div>

          {/* Warning Alert */}
          <div className="bg-yellow-500/20 border border-yellow-400/50 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-300 mr-2" />
              <span className="font-bold text-yellow-300">ATENÇÃO!</span>
            </div>
            <p className="text-lg">
              Após o término desta oferta, o preço voltará para <span className="line-through">R$ 79,90</span>. 
              Não perca essa chance de garantir por apenas <strong>R$ 19,90</strong>!
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center space-x-6 mb-8">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-2">
              <Users className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">+2.763 pessoas já compraram</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-2">
              <Clock className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Últimas 24h: 137 vendas</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToPurchase}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-yellow-400/50 hover:scale-110 transform transition-all duration-300 animate-pulse"
          >
            Sim! Eu Quero Minha Cópia Agora
          </button>

          <div className="mt-6 flex flex-wrap justify-center items-center space-x-4 text-sm opacity-90">
            <span>🔒 Compra 100% Segura</span>
            <span>•</span>
            <span>📱 Acesso Imediato</span>
        
          </div>
        </div>
      </div>
    </section>
  );
}
import { Star, Heart, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToPurchase = () => {
    const element = document.getElementById('comprar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgb(106, 90, 205) 0%, #d946ef 50%, #f97316 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-pulse">
          <Heart className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Sparkles className="h-6 w-6 text-white/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse">
          <Star className="h-10 w-10 text-white/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-white text-sm font-medium">Edição Limitada</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforme Sua
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent block">
                Alimentação
              </span>
              sem Sofrimento
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Mais de <strong>30 receitas</strong> deliciosas e saudáveis que vão revolucionar sua relação com a comida
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              {[
                '✨ Receitas práticas',
                '⏰ Preparo rápido',
                '🥗 Ingredientes acessíveis'
              ].map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToPurchase}
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 transform transition-all duration-300"
            >
              <Heart className="h-5 w-5 mr-2" />
              Garanta o Seu Agora
            </button>
            
            <p className="text-white/80 text-sm mt-4">
              💳 Pagamento 100% Seguro • 📱 Acesso Imediato
            </p>
          </div>

          {/* Right Content - Ebook Mockup */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div className="w-64 h-80 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-2xl flex flex-col justify-between p-6 text-white shadow-inner">
                  <div>
                    <div className="text-xs opacity-80 mb-2">EBOOK EXCLUSIVO</div>
                    <h3 className="text-lg font-bold mb-4 leading-tight">
                      150 Receitas Saudáveis para uma Vida Plena
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/30 rounded-full"></div>
                    <div className="h-2 bg-white/20 rounded-full w-4/5"></div>
                    <div className="h-2 bg-white/20 rounded-full w-3/5"></div>
                    <div className="text-xs opacity-80 mt-4">Por apenas R$ 19,90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { CreditCard, Smartphone, FileText, Shield, Star } from 'lucide-react';

export default function Purchase() {
  const handlePurchase = () => {
    // Aqui você pode integrar com seu processador de pagamento
      window.open("https://pay.hotmart.com/SEU-LINK-HOTMART", "_blank");
  };

  return (
    <section id="comprar" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Garanta sua transformação
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent block">
              Por apenas R$ 19,90
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Investimento mínimo para uma mudança máxima na sua qualidade de vida
          </p>
        </div>

        {/* Main Purchase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            
            {/* Price Section */}
            <div className="mb-8">
              <div className="text-gray-200 text-lg mb-2">De <span className="line-through">R$ 79,90</span> por apenas</div>
              <div className="text-6xl md:text-7xl font-bold mb-4">
                R$ 19<span className="text-3xl">,90</span>
              </div>
              <div className="inline-flex items-center bg-green-500 rounded-full px-4 py-2">
                <span className="text-sm font-bold">80% DE DESCONTO</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">✨ O que está incluso:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>30+ receitas saudáveis testadas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Guia de planejamento semanal</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Lista de compras organizadas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Valores nutricionais completos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Receitas doces e salgadas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Acesso vitalício ao conteúdo</span>
                </div>
              </div>
            </div>

            {/* Main CTA Button */}
            <button
              onClick={handlePurchase}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 transform transition-all duration-300 w-full md:w-auto"
            >
              
              🔥 COMPRAR AGORA POR R$ 19,90
            </button>

            <p className="text-sm opacity-90 mt-4">
              Pagamento único • Sem mensalidades • Acesso imediato
            </p>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Formas de Pagamento Aceitas</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
                  <CreditCard className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Cartão de Crédito</div>
                  <div className="text-sm text-gray-600">Até 12x sem juros</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">PIX</div>
                  <div className="text-sm text-gray-600">Aprovação imediata</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Boleto</div>
                  <div className="text-sm text-gray-600">Vencimento em 3 dias</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">100% Seguro</div>
                  <div className="text-sm text-gray-600">Certificado SSL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
              O que nossas clientes estão dizendo
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Perdi 8kg em 3 meses seguindo as receitas. O melhor é que não passei fome nenhum dia!"
                </p>
                <div className="font-semibold text-gray-800">- Ana Paula, 34 anos</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Minha família toda adora as receitas. Até meu marido que não gostava de salada agora pede mais!"
                </p>
                <div className="font-semibold text-gray-800">- Carla Silva, 28 anos</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Economizei muito dinheiro parando de pedir comida. As receitas são fáceis e deliciosas!"
                </p>
                <div className="font-semibold text-gray-800">- Juliana Costa, 31 anos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
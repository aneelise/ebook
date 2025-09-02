import { CheckCircle, Clock, ChefHat, Utensils, Gift } from 'lucide-react';

export default function Details() {
  const features = [
    'Lista de compras organizada para cada semana',
    'Valores nutricionais completos de cada receita',
    'Dicas de substituições para dietas específicas',
    'Receitas para diferentes refeições do dia',
    'Modo de preparo passo a passo com fotos',
  ];

  const categories = [
    { icon: ChefHat, title: 'Café da Manhã', count: '25 receitas', description: 'Comece o dia com energia' },
    { icon: Utensils, title: 'Almoço & Jantar', count: '20 receitas', description: 'Refeições completas e nutritivas' },
    { icon: Clock, title: 'Lanches Rápidos', count: '30 receitas', description: 'Para quando a fome bater' },
    { icon: Gift, title: 'Sobremesas Fit', count: '25 receitas', description: 'Doces sem culpa' },
  ];

  return (
    <section id="detalhes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O que você vai encontrar
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent block">
              Dentro do Ebook?
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Receitas Organizadas por Categoria:</h3>
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 rounded-2xl p-6 hover:bg-purple-50 hover:scale-105 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{category.title}</h4>
                  <p className="text-purple-600 font-semibold">{category.count}</p>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Features */}
          <div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Tudo que você precisa está incluído:</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start group hover:bg-white rounded-xl p-4 transition-all duration-300"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-gray-800 mb-3">🎁 Bônus Exclusivo:</h4>
                <p className="text-gray-600">
                  <strong>Guia de Planejamento Semanal</strong> - Organize suas refeições da semana em apenas 15 minutos!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Por que você deve comprar hoje?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-bold text-green-700 mb-3">💰 Economia de Tempo</h4>
              <p className="text-gray-600">Pare de perder horas pensando no que cozinhar. Tenha um cardápio completo na palma da mão.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-bold text-blue-700 mb-3">🏠 Economia de Dinheiro</h4>
              <p className="text-gray-600">Reduza gastos com delivery e alimentação fora de casa. Invista na sua saúde gastando menos.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-bold text-purple-700 mb-3">⚡ Resultados Reais</h4>
              <p className="text-gray-600">Sinta mais energia, melhore sua disposição e alcance seus objetivos estéticos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
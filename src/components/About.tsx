import { BookOpen, Users, Award, Zap, Star } from 'lucide-react';

export default function About() {
  const benefits = [
    {
      icon: BookOpen,
      title: '30+ Receitas Exclusivas',
      description: 'Receitas testadas e aprovadas, desde café da manhã até sobremesas saudáveis.'
    },
    {
      icon: Zap,
      title: 'Preparo Super Rápido',
      description: 'Todas as receitas foram pensadas para o seu dia a dia - máximo 15 minutos de preparo.'
    },
    {
      icon: Users,
      title: 'Para Toda a Família',
      description: 'Receitas que agradam adultos e crianças, tornando a alimentação saudável prazerosa.'
    },
    {
      icon: Award,
      title: 'Resultado',
      description: 'Método testado por pessoas que transformaram seus hábitos alimentares.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Por que este eBook vai
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent block">
              Transformar sua vida?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra no eBook o caminho para uma alimentação saudável simples e prazerosa, fácil de manter na sua rotina.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            "Finalmente consegui emagrecer comendo coisas gostosas!"
          </h3>
          <p className="text-lg opacity-90 mb-6">
            - Paula, perdeu 10kg em 4 meses seguindo as receitas.
          </p>
          <div className="flex justify-center">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona o acesso ao ebook?',
      answer: 'Após a confirmação do pagamento, você receberá imediatamente um email com o link para download do ebook em formato PDF. O acesso é vitalício e você pode baixar quantas vezes quiser.'
    },
    {
      question: 'Posso acessar as receitas pelo celular?',
      answer: 'Sim! O ebook está otimizado para leitura em qualquer dispositivo - celular, tablet, computador... Você pode levar suas receitas para onde quiser.'
    },
    {
      question: 'As receitas são realmente fáceis de fazer?',
      answer: 'Muito! Todas as receitas foram desenvolvidas pensando em pessoas com rotina corrida. O tempo máximo de preparo é 15 minutos e usamos ingredientes fáceis de encontrar.'
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos todas as principais formas de pagamento: cartão de crédito, débito, PIX e boleto bancário. O pagamento é processado de forma 100% segura através de nossa plataforma certificada.'
    },
    {
      question: 'O ebook serve para iniciantes na cozinha?',
      answer: 'Perfeito para iniciantes! Cada receita tem instruções detalhadas, passo a passo com dicas especiais. Você não precisa ter experiência culinária para ter sucesso.'
    },
    {
      question: 'Posso imprimir as receitas?',
      answer: 'Claro! O PDF pode ser impresso quantas vezes desejar. Muitas pessoas gostam de ter suas receitas favoritas impressas para usar na cozinha.'
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="h-5 w-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-medium">Perguntas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tire suas Dúvidas
          </h2>
          <p className="text-xl text-gray-600">
            As respostas para as principais dúvidas sobre nosso ebook
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg mb-4 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="font-bold text-gray-800 mb-2">100% Seguro</h4>
            <p className="text-gray-600 text-sm">Pagamento protegido com certificado SSL</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="font-bold text-gray-800 mb-2">Acesso Imediato</h4>
            <p className="text-gray-600 text-sm">Receba o ebook em seu email instantaneamente</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">💯</div>
            <h4 className="font-bold text-gray-800 mb-2">Melhora de hábitos</h4>
            <p className="text-gray-600 text-sm">Um guia prático para transformar sua alimentação em algo saudável e gostoso de seguir todos os dias.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
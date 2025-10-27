import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen p-4 md:p-8 text-center md:text-left overflow-hidden">
        {/* Subtle background gradient/blob for visual interest */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text and Button */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 animate-fade-in-up">
              Descubra seu Caminho Profissional, do seu Jeito.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl animate-fade-in-up delay-100">
              Um teste vocacional cientificamente embasado, inclusivo e contextualizado para a realidade brasileira.
            </p>
            <button 
              onClick={onStart} 
              className="mt-8 px-12 py-4 text-lg font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg animate-fade-in-up delay-200"
            >
              Começar meu teste
            </button>
            <p className="text-sm text-gray-500 animate-fade-in-up delay-300">Tempo estimado: ~10 minutos</p>
          </div>

          {/* Right Column: Image */}
          <div className="hidden md:flex justify-center items-center animate-fade-in-up delay-400">
            <img 
              src="https://via.placeholder.com/600x400?text=Imagem+Ilustrativa" 
              alt="Pessoas diversas colaborando e aprendendo" 
              className="rounded-2xl shadow-xl max-h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section: O que esperar do teste */}
      <section className="py-16 bg-gray-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-300 mb-8 animate-fade-in-up delay-400">O que esperar do teste?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center text-left animate-fade-in-up delay-500">
              <span className="text-orange-400 text-4xl mb-4">✓</span>
              <h3 className="font-bold text-xl text-white mb-2">Sem Respostas Certas ou Erradas</h3>
              <p className="text-gray-300">Sua autenticidade é o que importa. Responda com honestidade sobre quem você É.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center text-left animate-fade-in-up delay-600">
              <span className="text-orange-400 text-4xl mb-4">✓</span>
              <h3 className="font-bold text-xl text-white mb-2">Flexibilidade Total</h3>
              <p className="text-gray-300">Pode pausar e voltar quando quiser, sem perder seu progresso.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center text-left animate-fade-in-up delay-700">
              <span className="text-orange-400 text-4xl mb-4">✓</span>
              <h3 className="font-bold text-xl text-white mb-2">Privacidade Garantida</h3>
              <p className="text-gray-300">Suas informações são 100% confidenciais e seguras.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center text-left animate-fade-in-up delay-800">
              <span className="text-orange-400 text-4xl mb-4">✓</span>
              <h3 className="font-bold text-xl text-white mb-2">Resultados Personalizados</h3>
              <p className="text-gray-300">Análise profunda para te ajudar a encontrar caminhos que fazem sentido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nossa Metodologia */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 animate-fade-in-up">Nossa Metodologia</h2>
          <p className="text-lg text-gray-300 mb-10 animate-fade-in-up delay-100">
            Nosso teste é construído sobre pilares científicos sólidos para garantir que você receba uma orientação de carreira robusta e confiável.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-left animate-fade-in-up delay-200">
              <h3 className="font-bold text-xl text-orange-300 mb-2">Interesses RIASEC</h3>
              <p className="text-gray-300">
                Baseado na teoria de John Holland, identificamos seus interesses em seis áreas: Realista, Investigativo, Artístico, Social, Empreendedor e Convencional. Isso nos ajuda a mapear atividades e ambientes de trabalho onde você se sentirá mais engajado.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-left animate-fade-in-up delay-300">
              <h3 className="font-bold text-xl text-orange-300 mb-2">Valores de Trabalho</h3>
              <p className="text-gray-300">
                Exploramos o que é fundamental para você em uma carreira – seja propósito, autonomia, segurança, criatividade ou equilíbrio. Entender seus valores inegociáveis é crucial para a satisfação a longo prazo.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-left animate-fade-in-up delay-400">
              <h3 className="font-bold text-xl text-orange-300 mb-2">Estilo de Trabalho Ideal</h3>
              <p className="text-gray-300">
                Analisamos suas preferências sobre como você funciona melhor: em equipe ou sozinho, com estrutura ou liberdade, em ambientes calmos ou movimentados. Isso ajuda a encontrar um ambiente que potencializa seus pontos fortes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Inclusão e Acolhimento */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 animate-fade-in-up">Inclusão e Acolhimento</h2>
          <p className="text-lg text-gray-300 mb-10 animate-fade-in-up delay-100">
            Este teste foi cuidadosamente projetado para ser um espaço seguro e afirmativo para todos, especialmente para pessoas neurodivergentes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg text-left animate-fade-in-up delay-200">
              <h3 className="font-bold text-xl text-white mb-2">Neurodiversidade Afirmada</h3>
              <p className="text-gray-300">
                Se você tem TDAH, TEA, dislexia ou outras condições, suas características são vistas como parte natural e valiosa do seu perfil, não como "problemas". Celebramos suas formas únicas de pensar e interagir.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg text-left animate-fade-in-up delay-300">
              <h3 className="font-bold text-xl text-white mb-2">Contexto Brasileiro</h3>
              <p className="text-gray-300">
                Entendemos que a realidade brasileira é diversa. O teste considera fatores socioeconômicos e culturais para oferecer recomendações que são realmente aplicáveis e acessíveis.
              </p>
            </div>
          </div>
          <p className="text-md text-gray-400 mt-10 animate-fade-in-up delay-400">
            Nosso objetivo é que você se sinta visto(a), compreendido(a) e capacitado(a) para construir uma carreira que reflita quem você é de verdade.
          </p>
        </div>
      </section>

      {/* Call to Action at the bottom */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-6 animate-fade-in-up">
            Pronto para começar sua jornada de autodescoberta?
          </h2>
          <button 
            onClick={onStart} 
            className="px-12 py-4 text-lg font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg animate-fade-in-up delay-100"
          >
            Iniciar Teste Agora
          </button>
        </div>
      </section>
    </div>
  );
};

export default WelcomeScreen;
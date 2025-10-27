
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center space-y-8 animate-fade-in-up">
        <header>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-2">
            Vamos descobrir caminhos que fazem sentido pra VOCÊ
          </h1>
          <p className="text-lg text-gray-300">
            Este teste leva cerca de 10 minutos e vai te ajudar a entender seu perfil profissional de verdade.
          </p>
        </header>

        <ul className="text-left space-y-3 text-gray-300 list-none pl-0">
          <li className="flex items-start">
            <span className="text-green-400 mr-3 mt-1">✓</span>
            <span>Não existe resposta certa ou errada</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-3 mt-1">✓</span>
            <span>Responda com honestidade sobre quem você <strong>É</strong>, não quem "deveria" ser</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-3 mt-1">✓</span>
            <span>Você pode pausar e voltar quando quiser</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-3 mt-1">✓</span>
            <span>Suas informações são 100% confidenciais</span>
          </li>
        </ul>

        <div className="bg-gray-700 p-6 rounded-lg text-left">
          <h3 className="font-bold text-indigo-400 mb-2">Aviso de Inclusão</h3>
          <p className="text-sm text-gray-300">
            Este teste foi criado pensando na diversidade real de pessoas, incluindo neurodivergentes. Se você tem TDAH, autismo, dislexia ou qualquer outra condição, suas características serão consideradas como parte natural do seu perfil, não como "problema".
          </p>
        </div>

        <button
          onClick={onStart}
          className="w-full md:w-auto px-12 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
        >
          Começar meu teste
        </button>
        <p className="text-sm text-gray-500">Tempo estimado: ~10 minutos</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;

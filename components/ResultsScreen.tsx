import React from 'react';
import { FinalReport, RIASECScores } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const RIASEC_COLORS = { R: '#ef4444', I: '#3b82f6', A: '#a855f7', S: '#10b981', E: '#f97316', C: '#6b7280' };
const RIASEC_NAMES = { R: 'Realista', I: 'Investigativo', A: 'Artístico', S: 'Social', E: 'Empreendedor', C: 'Convencional' };

const RiasecChart: React.FC<{ scores: RIASECScores }> = ({ scores }) => {
  // FIX: Refactored data mapping to be more type-safe and resolve sort error.
  const data = (Object.keys(scores) as Array<keyof RIASECScores>).map((key) => ({
    name: RIASEC_NAMES[key],
    score: scores[key],
    key: key
  })).sort((a, b) => b.score - a.score);

  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} width={100} />
          <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }} />
          <Bar dataKey="score" barSize={20} radius={[0, 10, 10, 0]}>
            {data.map((entry) => (
              <Cell key={`cell-${entry.key}`} fill={RIASEC_COLORS[entry.key as keyof RIASECScores]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


const ResultsScreen: React.FC<{ report: FinalReport, onRestart: () => void }> = ({ report, onRestart }) => {
  const { riasecScores, topValues, primaryValue, geminiAnalysis, careerFamilies } = report;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 animate-fade-in-up">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-2">
            Seu Perfil Vocacional
          </h1>
          <p className="text-lg text-gray-300">
            Aqui está um mergulho profundo em seus interesses, valores e estilo de trabalho.
          </p>
        </header>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-300 mb-4">✨ Resumo do seu Perfil</h2>
            <p className="text-gray-300 leading-relaxed">{geminiAnalysis.profileSummary}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-indigo-300 mb-4">Interesses (RIASEC)</h2>
              <p className="text-sm text-gray-400 mb-4">Seus maiores interesses vocacionais, que indicam os tipos de atividades que te motivam.</p>
              <RiasecChart scores={riasecScores} />
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-indigo-300 mb-4">Valores de Trabalho</h2>
              <p className="text-sm text-gray-400 mb-4">O que é inegociável para você em uma carreira.</p>
              <div className="space-y-3">
                <div className="bg-indigo-600/30 p-4 rounded-lg border-l-4 border-indigo-400">
                  <h3 className="font-bold text-lg text-white">⭐ Valor Principal</h3>
                  <p className="text-indigo-200">{primaryValue}</p>
                </div>
                 <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-200">Outros valores importantes</h3>
                  <ul className="list-disc list-inside text-gray-300 mt-2">
                    {topValues.filter(v => v !== primaryValue).map(val => <li key={val}>{val}</li>)}
                  </ul>
                 </div>
              </div>
            </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-300 mb-4">🚀 Seus Super-Poderes</h2>
            <p className="text-gray-300 leading-relaxed">{geminiAnalysis.strengthsAndSuperpowers}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-300 mb-4">💻 Seu Estilo de Trabalho Ideal</h2>
            <p className="text-gray-300 leading-relaxed">{geminiAnalysis.workStyleNarrative}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-300 mb-4">🗺️ Famílias de Carreira Sugeridas</h2>
            <div className="space-y-6">
                {careerFamilies.map((family, index) => (
                    <div key={index} className="bg-gray-700/50 p-5 rounded-lg">
                        <h3 className="text-xl font-bold text-purple-400">{family.name}</h3>
                        <p className="text-gray-300 mt-2 mb-3">{family.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {family.examples.map(ex => <span key={ex} className="bg-gray-600 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">{ex}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
         <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-300 mb-4">🌱 Contexto e Próximos Passos</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{geminiAnalysis.contextAndSupport}</p>
            <p className="text-gray-300 leading-relaxed">{geminiAnalysis.finalReflection}</p>
        </div>

        <div className="text-center pt-8">
            <button
              onClick={onRestart}
              className="px-12 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
            >
              Refazer o Teste
            </button>
        </div>

      </div>
    </div>
  );
};

export default ResultsScreen;
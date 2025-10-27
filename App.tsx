import React, { useState, useMemo } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';
import { sections } from './constants';
import { Answers, FinalReport, Question } from './types';
import { generateReportAnalysis } from './services/geminiService';

const App: React.FC = () => {
  const [appState, setAppState] = useState<'welcome' | 'test' | 'processing' | 'results'>('welcome');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [report, setReport] = useState<FinalReport | null>(null);

  const currentSection = sections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];
  
  const totalQuestions = useMemo(() => sections.reduce((acc, section) => acc + section.questions.length, 0), []);
  const questionsAnswered = useMemo(() => {
      let count = 0;
      for(let i = 0; i < currentSectionIndex; i++) {
          count += sections[i].questions.length;
      }
      count += currentQuestionIndex;
      return count;
  }, [currentSectionIndex, currentQuestionIndex]);

  const progress = totalQuestions > 0 ? (questionsAnswered / totalQuestions) * 100 : 0;

  const handleStart = () => {
    setAppState('test');
  };
  
  const handleRestart = () => {
    setAnswers({});
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setReport(null);
    setAppState('welcome');
  };

  const handleAnswer = (variable: string, value: any) => {
    setAnswers(prev => ({ ...prev, [variable]: value }));
  };
  
  const processAndGenerateReport = async (finalAnswers: Answers) => {
    // 1. Calculate RIASEC Scores
    const riasecScores = {
      R: ( (parseInt(finalAnswers.interesse_r1) || 0) + (parseInt(finalAnswers.interesse_r2) || 0) ) / 2 / 5 * 100,
      I: ( (parseInt(finalAnswers.interesse_i1) || 0) + (parseInt(finalAnswers.interesse_i2) || 0) ) / 2 / 5 * 100,
      A: ( (parseInt(finalAnswers.interesse_a1) || 0) + (parseInt(finalAnswers.interesse_a2) || 0) ) / 2 / 5 * 100,
      S: ( (parseInt(finalAnswers.interesse_s1) || 0) + (parseInt(finalAnswers.interesse_s2) || 0) ) / 2 / 5 * 100,
      E: ( (parseInt(finalAnswers.interesse_e1) || 0) + (parseInt(finalAnswers.interesse_e2) || 0) ) / 2 / 5 * 100,
      C: ( (parseInt(finalAnswers.interesse_c1) || 0) + (parseInt(finalAnswers.interesse_c2) || 0) ) / 2 / 5 * 100,
    };
    
    // 2. Get Values
    const topValues = finalAnswers.valor_escolha || [];
    const primaryValue = finalAnswers.valor_principal || topValues[0] || 'Não definido';

    // 3. Call Gemini API
    const geminiAnalysis = await generateReportAnalysis(finalAnswers, riasecScores, topValues, primaryValue);

    const finalReport: FinalReport = {
        riasecScores,
        topValues,
        primaryValue,
        workStyle: {}, // this is synthesized in gemini now
        strengths: [], // this is synthesized in gemini now
        adaptations: [], // this is synthesized in gemini now
        geminiAnalysis: {
            ...geminiAnalysis,
            careerFamilies: geminiAnalysis.careerFamilies || [],
        },
        careerFamilies: geminiAnalysis.careerFamilies || [],
    };
    
    setReport(finalReport);
    setAppState('results');
  };

  const handleNext = async () => {
    if (!currentSection) return;

    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      if (currentSectionIndex < sections.length - 1) {
        setCurrentSectionIndex(prev => prev + 1);
        setCurrentQuestionIndex(0);
      } else {
        setAppState('processing');
        await processAndGenerateReport(answers);
      }
    }
  };

  const handleBack = () => {
      if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(prev => prev -1);
      } else if (currentSectionIndex > 0) {
          const prevSection = sections[currentSectionIndex - 1];
          setCurrentSectionIndex(prev => prev - 1);
          setCurrentQuestionIndex(prevSection.questions.length - 1);
      }
  };

  const renderContent = () => {
    switch (appState) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} />;
      case 'test':
        if (!currentQuestion) return <div>Fim do teste.</div>;

        let dynamicOptions;
        if (currentQuestion.id === 'P2.2') {
            const selectedValues = answers.valor_escolha || [];
            const valueOptions = sections[2].questions[0].options || [];
            dynamicOptions = valueOptions.filter(opt => selectedValues.includes(opt.value));
        }

        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900">
             <div className="w-full max-w-2xl mb-8">
                 <div className="flex justify-between items-center mb-2">
                     <span className="text-sm font-medium text-indigo-300">{currentSection.name}</span>
                     <span className="text-sm font-medium text-gray-400">{questionsAnswered + 1} / {totalQuestions}</span>
                 </div>
                 <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
             </div>
            <QuestionCard 
                key={currentQuestion.id}
                question={currentQuestion}
                onAnswer={handleAnswer}
                currentAnswer={answers[currentQuestion.variable]}
                dynamicOptions={dynamicOptions}
            />
            <div className="flex justify-between mt-8 w-full max-w-2xl">
                <button 
                  onClick={handleBack}
                  disabled={currentSectionIndex === 0 && currentQuestionIndex === 0}
                  className="px-8 py-3 text-md font-semibold text-gray-300 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Voltar
                </button>
                <button onClick={handleNext} className="px-8 py-3 text-md font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors">
                  {currentSectionIndex === sections.length - 1 && currentQuestionIndex === currentSection.questions.length - 1 ? 'Finalizar e Ver Resultado' : 'Próximo'}
                </button>
            </div>
          </div>
        );
       case 'processing':
          return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white">
                <div className="newtons-cradle mb-6">
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                </div>
                <h2 className="mt-6 text-2xl font-bold">Montando seu perfil...</h2>
                <p className="mt-2 text-gray-400">Isso leva apenas alguns segundos!</p>
            </div>
          );
      case 'results':
        return report ? <ResultsScreen report={report} onRestart={handleRestart} /> : <div>Erro ao gerar relatório.</div>;
    }
  };

  return <div className="app">{renderContent()}</div>;
};

export default App;
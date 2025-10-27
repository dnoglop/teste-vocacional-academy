import React, { useState, useEffect } from 'react';
// FIX: Removed unused 'Answer' type which is not exported from '../types'.
import { Question, QuestionOption } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, value: any) => void;
  currentAnswer: any;
  dynamicOptions?: QuestionOption[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, currentAnswer, dynamicOptions }) => {
  const [localMultiAnswer, setLocalMultiAnswer] = useState<string[]>([]);
  const options = dynamicOptions || question.options || [];

  useEffect(() => {
    if (question.type === 'multiple-choice-multiple' && Array.isArray(currentAnswer)) {
      setLocalMultiAnswer(currentAnswer);
    }
  }, [currentAnswer, question.type]);

  const handleMultiChoiceChange = (value: string) => {
    const newAnswers = localMultiAnswer.includes(value)
      ? localMultiAnswer.filter(item => item !== value)
      : [...localMultiAnswer, value];
    
    // For "Nenhuma das anteriores" logic
    if (value === 'nenhuma' || value === 'nenhum') {
        onAnswer(question.variable, [value]);
        setLocalMultiAnswer([value]);
        return;
    }
    const filteredAnswers = newAnswers.filter(item => item !== 'nenhuma' && item !== 'nenhum');
    onAnswer(question.variable, filteredAnswers);
    setLocalMultiAnswer(filteredAnswers);
  };
  
  const handleLimitedMultiChoiceChange = (value: string) => {
    const newAnswers = localMultiAnswer.includes(value)
      ? localMultiAnswer.filter(item => item !== value)
      : [...localMultiAnswer, value];

    if (newAnswers.length > 3) {
      // simple alert for user feedback
      alert("Você pode escolher no máximo 3 opções.");
      return;
    }
    
    onAnswer(question.variable, newAnswers);
    setLocalMultiAnswer(newAnswers);
  };


  const renderInput = () => {
    switch (question.type) {
      case 'multiple-choice-single':
        return (
          <div className="space-y-3">
            {options.map(opt => (
              <label key={opt.value} className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors duration-200">
                <input
                  type="radio"
                  name={question.id}
                  value={opt.value}
                  checked={currentAnswer === opt.value}
                  onChange={e => onAnswer(question.variable, e.target.value)}
                  className="form-radio h-5 w-5 text-indigo-500 bg-gray-800 border-gray-600 focus:ring-indigo-500"
                />
                <span className="ml-4 text-gray-200">{opt.label}</span>
              </label>
            ))}
          </div>
        );
       case 'multiple-choice-multiple':
        const isLimited = question.id === 'P2.1';
        const handleChange = isLimited ? handleLimitedMultiChoiceChange : handleMultiChoiceChange;
        
        return (
          <div className="space-y-3">
            {isLimited && <p className="text-sm text-indigo-300 mb-2">Escolha exatamente 3 opções.</p>}
            {options.map(opt => (
              <label key={opt.value} className="flex items-start p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors duration-200">
                <input
                  type="checkbox"
                  value={opt.value}
                  checked={localMultiAnswer.includes(opt.value)}
                  onChange={() => handleChange(opt.value)}
                  className="form-checkbox h-5 w-5 text-indigo-500 bg-gray-800 border-gray-600 rounded focus:ring-indigo-500 mt-1"
                />
                <span className="ml-4 text-gray-200">{opt.label}</span>
              </label>
            ))}
          </div>
        );

      case 'likert-5':
        const likertLabels = ['1', '2', '3', '4', '5'];
        return (
          <div>
              <div className="flex justify-between text-xs text-gray-400 px-2 mb-2">
                  <span>{options[0].label}</span>
                  <span>{options[1].label}</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {likertLabels.map(value => (
                  <label key={value} className={`p-4 rounded-lg cursor-pointer text-center font-bold transition-all duration-200 ${currentAnswer === value ? 'bg-indigo-600 text-white shadow-lg scale-105' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    <input
                      type="radio"
                      name={question.id}
                      value={value}
                      checked={currentAnswer === value}
                      onChange={e => onAnswer(question.variable, e.target.value)}
                      className="opacity-0 w-0 h-0"
                    />
                    {value}
                  </label>
                ))}
            </div>
          </div>
        );
      
      case 'dropdown':
         return (
            <select
                value={currentAnswer || ''}
                onChange={e => onAnswer(question.variable, e.target.value)}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="" disabled>Selecione uma opção...</option>
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
         );
      case 'text-open':
          return (
            <textarea
                value={currentAnswer || ''}
                onChange={e => onAnswer(question.variable, e.target.value)}
                rows={5}
                placeholder="Sua resposta aqui..."
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-2xl mx-auto animate-fade-in-up">
      <h2 className="text-xl md:text-2xl font-bold text-indigo-300 mb-2">{question.questionText}</h2>
      {question.instruction && <p className="text-sm text-gray-400 mb-6">{question.instruction}</p>}
      {renderInput()}
    </div>
  );
};

export default QuestionCard;
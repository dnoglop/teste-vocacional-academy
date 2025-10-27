
import { GoogleGenAI, Type } from "@google/genai";
import { Answers } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a placeholder for environments where the key might not be set.
  // In a real deployed environment, the key should always be available.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}


const createPrompt = (answers: Answers, riasecScores: any, topValues: any, primaryValue: string) => {
  const profile = {
    idade_faixa: answers.idade_faixa,
    genero: answers.genero,
    neurodivergencia: Object.keys(answers).filter(k => k.startsWith('neuro_') && answers[k] === true).map(k => k.replace('neuro_', '')),
    desafios: Object.keys(answers).filter(k => k.startsWith('desafio_') && answers[k] === true).map(k => k.replace('desafio_', '')),
    forcas: Object.keys(answers).filter(k => k.startsWith('forca_') && answers[k] === true).map(k => k.replace('forca_', '')),
    necessidades_adaptacao: Object.keys(answers).filter(k => k.startsWith('adaptacao_') && answers[k] === true).map(k => k.replace('adaptacao_', '')),
    contexto_socioeconomico: answers.contexto_socioeconomico,
  };

  const workStyle = {
    variedade_profundidade: answers.estilo_variedade_profundidade,
    social_solo: answers.estilo_social_solo,
    estrutura_autonomia: answers.estilo_estrutura_autonomia,
    ritmo: answers.estilo_ritmo,
    ambiente_ruido: answers.estilo_ambiente_ruido,
    aprendizado: answers.estilo_aprendizado,
    movimento: answers.estilo_movimento,
    previsibilidade: answers.estilo_previsibilidade,
    energia_dia: answers.estilo_energia_dia,
    comunicacao: answers.estilo_comunicacao,
    decisao: answers.estilo_decisao
  };

  const openAnswer = answers.insight_narrativo || "Nenhuma resposta fornecida.";

  const promptData = {
      profile,
      riasecScores,
      workValues: { primary: primaryValue, secondary: topValues.filter(v => v !== primaryValue) },
      workStyle,
      openAnswer
  };

  return `
    Você é um mentor de carreira gentil, inclusivo e que afirma a neurodiversidade. Seu público são jovens brasileiros (15-28 anos).
    Seu objetivo é sintetizar os dados de um teste vocacional em um relatório personalizado, encorajador e prático. Use um tom amigável e moderno (linguagem da Geração Z).
    Com base nos dados JSON a seguir, gere um novo objeto JSON com análises narrativas.

    Dados do usuário:
    ${JSON.stringify(promptData, null, 2)}
  `;
};

export const generateReportAnalysis = async (answers: Answers, riasecScores: any, topValues: any, primaryValue: string) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY! });
  const prompt = createPrompt(answers, riasecScores, topValues, primaryValue);

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      profileSummary: {
        type: Type.STRING,
        description: "Um resumo breve e positivo do perfil geral do usuário, reconhecendo sua singularidade e contexto. Use 2-3 frases."
      },
      workStyleNarrative: {
        type: Type.STRING,
        description: "Um parágrafo explicando seu estilo de trabalho ideal com base em suas respostas, conectando-o a traços neurodivergentes, se aplicável, de forma positiva."
      },
      strengthsAndSuperpowers: {
        type: Type.STRING,
        description: "Uma narrativa destacando seus principais pontos fortes e 'superpoderes' (baseado nas forças selecionadas), enquadrando-os positivamente como vantagens profissionais."
      },
      contextAndSupport: {
        type: Type.STRING,
        description: "Um reconhecimento gentil de seu contexto e desafios, com foco em estratégias de apoio e na busca por ambientes de trabalho adequados."
      },
      finalReflection: {
        type: Type.STRING,
        description: "Um parágrafo final que incorpora temas de sua resposta aberta, encorajando-os em sua jornada de carreira. Seja inspirador e prático."
      },
      careerFamilies: {
        type: Type.ARRAY,
        description: "Sugira 3 'famílias de carreira' que se alinham com o perfil RIASEC, valores e estilo de trabalho. Não liste apenas profissões, mas grupos de áreas. Seja criativo e considere as tendências do mercado de trabalho brasileiro.",
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Nome da família de carreira (ex: 'Comunicação Criativa e Digital')." },
            description: { type: Type.STRING, description: "Breve descrição do que essa família de carreira envolve e por que se alinha ao perfil do usuário." },
            examples: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 a 5 exemplos de profissões dentro desta família." }
          }
        }
      }
    }
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7
      }
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Fallback in case of API error
    return {
      profileSummary: "Não foi possível gerar a análise do perfil. Por favor, tente novamente.",
      workStyleNarrative: "Houve um erro ao analisar seu estilo de trabalho.",
      strengthsAndSuperpowers: "Não foi possível analisar seus pontos fortes.",
      contextAndSupport: "A análise de contexto não pôde ser gerada.",
      finalReflection: "Ocorreu um erro. Tente refazer o teste mais tarde.",
      careerFamilies: [{ name: "Erro", description: "Não foi possível sugerir famílias de carreira.", examples: [] }]
    };
  }
};

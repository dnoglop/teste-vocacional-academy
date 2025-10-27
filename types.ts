
export type QuestionType =
  | 'multiple-choice-single'
  | 'multiple-choice-multiple'
  | 'likert-5'
  | 'dropdown'
  | 'text-open'
  | 'text-input';

export interface QuestionOption {
  label: string;
  value: string;
  context?: string;
}

export interface Question {
  id: string;
  variable: string;
  sectionId: number;
  questionText: string;
  instruction?: string;
  type: QuestionType;
  options?: QuestionOption[];
  relevance?: string[];
}

export interface Section {
  id: number;
  name: string;
  title: string;
  instruction?: string;
  questions: Question[];
}

export type Answers = Record<string, any>;

export interface RIASECScores {
  R: number;
  I: number;
  A: number;
  S: number;
  E: number;
  C: number;
}

export interface FinalReport {
  riasecScores: RIASECScores;
  topValues: string[];
  primaryValue: string;
  workStyle: Record<string, any>;
  strengths: string[];
  adaptations: string[];
  geminiAnalysis: {
    profileSummary: string;
    workStyleNarrative: string;
    strengthsAndSuperpowers: string;
    contextAndSupport: string;
    finalReflection: string;
  };
  careerFamilies: { name: string; description: string; examples: string[] }[];
}


import { Section } from './types';

export const sections: Section[] = [
  // SEÇÃO 0: Perfil Inicial
  {
    id: 0,
    name: 'Perfil Inicial',
    title: 'Primeiro, vamos te conhecer um pouco',
    instruction: 'Essas informações nos ajudam a personalizar o teste e interpretar seus resultados de forma mais precisa. Você pode escolher "prefiro não informar" em qualquer pergunta.',
    questions: [
      {
        id: 'P0.1', variable: 'idade_faixa', sectionId: 0, questionText: 'Qual sua idade?', type: 'multiple-choice-single',
        options: [
          { label: '15-17 anos', value: '15-17' },
          { label: '18-21 anos', value: '18-21' },
          { label: '22-25 anos', value: '22-25' },
          { label: '26-28 anos', value: '26-28' },
        ],
      },
      {
        id: 'P0.2', variable: 'genero', sectionId: 0, questionText: 'Como você se identifica?', type: 'multiple-choice-single',
        options: [
          { label: 'Mulher cis', value: 'mulher_cis' },
          { label: 'Homem cis', value: 'homem_cis' },
          { label: 'Mulher trans', value: 'mulher_trans' },
          { label: 'Homem trans', value: 'homem_trans' },
          { label: 'Pessoa não-binária', value: 'nao_binaria' },
          { label: 'Prefiro não informar', value: 'nao_informar' },
        ],
      },
      {
        id: 'P0.3', variable: 'neurodivergencia', sectionId: 0, questionText: 'Você se identifica com alguma dessas características neurológicas ou condições?',
        instruction: 'Pode marcar quantas se aplicarem. Vale diagnóstico formal ou auto-identificação.',
        type: 'multiple-choice-multiple',
        options: [
          { label: 'TDAH (Transtorno de Déficit de Atenção e Hiperatividade)', value: 'neuro_tdah' },
          { label: 'TEA (Transtorno do Espectro Autista)', value: 'neuro_tea' },
          { label: 'Dislexia', value: 'neuro_dislexia' },
          { label: 'Discalculia', value: 'neuro_discalculia' },
          { label: 'Altas Habilidades / Superdotação', value: 'neuro_ah' },
          { label: 'Alta Sensibilidade Sensorial (PAS)', value: 'neuro_pas' },
          { label: 'Ansiedade que impacta significativamente meu dia a dia', value: 'neuro_ansiedade' },
          { label: 'TOC (Transtorno Obsessivo-Compulsivo)', value: 'neuro_toc' },
          { label: 'Nenhuma das anteriores', value: 'neuro_nenhuma' },
          { label: 'Prefiro não informar', value: 'nao_informar' },
        ]
      },
       {
        id: 'P0.5', variable: 'forcas_neuro', sectionId: 0, questionText: 'Agora, seus SUPER-PODERES! O que te destaca?',
        instruction: 'Marque todas as que fazem sentido pra você',
        type: 'multiple-choice-multiple',
        options: [
          { label: 'Hiperfoco intenso (quando me interesso, mergulho MUITO fundo)', value: 'forca_hiperfoco' },
          { label: 'Pensamento "fora da caixa" / criatividade singular', value: 'forca_criatividade' },
          { label: 'Atenção extrema a detalhes que outros não percebem', value: 'forca_detalhes' },
          { label: 'Paixão intensa por temas específicos', value: 'forca_paixao' },
          { label: 'Pensamento sistêmico (vejo padrões e conexões)', value: 'forca_sistemico' },
          { label: 'Honestidade direta e autenticidade', value: 'forca_honestidade' },
          { label: 'Energia intensa quando estou motivado/a', value: 'forca_energia' },
          { label: 'Hipersensibilidade (capto emoções, detalhes sutis)', value: 'forca_hipersensibilidade' },
          { label: 'Questionamento constante do "status quo"', value: 'forca_questionamento' },
          { label: 'Memória excepcional para coisas que me interessam', value: 'forca_memoria' },
          { label: 'Capacidade de aprender muito rápido sozinho/a', value: 'forca_autodidata' },
        ],
      },
      {
        id: 'P0.8', variable: 'contexto_socioeconomico', sectionId: 0, questionText: 'Qual dessas descreve melhor sua trajetória educacional?', type: 'multiple-choice-single',
        options: [
            { label: 'Sempre estudei em escola/faculdade particular', value: 'particular' },
            { label: 'Sempre estudei em escola pública', value: 'publica' },
            { label: 'Mix de pública e particular', value: 'mix' },
            { label: 'Sou a primeira pessoa da minha família buscando ensino superior', value: 'primeira_geracao' },
            { label: 'Já trabalho e sustento parcial ou totalmente minha família', value: 'trabalho_sustento' },
            { label: 'Tenho suporte familiar completo (financeiro e emocional)', value: 'suporte_total' },
        ]
      },
      {
        id: 'P0.10', variable: 'necessidades_adaptacao', sectionId: 0, questionText: 'Em ambientes de trabalho ou estudo, quais dessas adaptações fazem diferença pra você?', type: 'multiple-choice-multiple',
        options: [
            { label: 'Ambiente silencioso ou permissão para usar fones/protetores', value: 'adaptacao_silencio' },
            { label: 'Flexibilidade de horários', value: 'adaptacao_flexibilidade' },
            { label: 'Instruções escritas (além das verbais)', value: 'adaptacao_escrita' },
            { label: 'Mais tempo para tarefas/provas', value: 'adaptacao_tempo' },
            { label: 'Pausas frequentes', value: 'adaptacao_pausas' },
            { label: 'Possibilidade de trabalho remoto ou híbrido', value: 'adaptacao_remoto' },
            { label: 'Iluminação ajustável / ambiente com pouca estimulação sensorial', value: 'adaptacao_sensorial' },
            { label: 'Comunicação direta e clara (sem "entrelinhas")', value: 'adaptacao_comunicacao' },
            { label: 'Rotina previsível e estruturada', value: 'adaptacao_rotina' },
            { label: 'Liberdade de movimento (não ficar parado horas)', value: 'adaptacao_movimento' },
            { label: 'Nenhuma necessidade específica', value: 'nenhuma' },
            { label: 'Prefiro não informar', value: 'nao_informar' },
        ]
      }
    ]
  },
  // SEÇÃO 1: Interesses Vocacionais
  {
    id: 1,
    name: 'Interesses Vocacionais',
    title: 'O que te desperta curiosidade?',
    instruction: "Avalie o quanto cada área te interessa, independente de achar que é 'bom/boa' nela.",
    questions: [
      { id: 'P1.1', variable: 'interesse_r1', sectionId: 1, questionText: 'Trabalhar com as mãos, construir, consertar, mexer com máquinas ou tecnologia física (hardware, mecânica, marcenaria, etc.)', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.2', variable: 'interesse_r2', sectionId: 1, questionText: 'Trabalhar ao ar livre, com animais, plantas, meio ambiente, atividades físicas ou esportes', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.3', variable: 'interesse_i1', sectionId: 1, questionText: 'Pesquisar, analisar dados, resolver problemas complexos com lógica, matemática ou ciências exatas', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.4', variable: 'interesse_i2', sectionId: 1, questionText: "Estudar comportamento humano, sociedade, filosofia, fazer pesquisas qualitativas, entender o 'porquê' das coisas", type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.5', variable: 'interesse_a1', sectionId: 1, questionText: 'Criar arte visual, design, vídeos, animação, fotografia, trabalhar com estética e composição', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.6', variable: 'interesse_a2', sectionId: 1, questionText: 'Escrever (textos, roteiros, poesia), fazer música, atuar, apresentar, se expressar artisticamente', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.7', variable: 'interesse_s1', sectionId: 1, questionText: 'Ajudar pessoas diretamente, cuidar, fazer terapia, ensinar, trabalhar em saúde ou assistência social', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.8', variable: 'interesse_s2', sectionId: 1, questionText: 'Ensinar, treinar, desenvolver pessoas, facilitar aprendizado, ser mentor/mentora', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.9', variable: 'interesse_e1', sectionId: 1, questionText: 'Criar/gerenciar negócios, vender, negociar, liderar equipes, tomar decisões estratégicas', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.10', variable: 'interesse_e2', sectionId: 1, questionText: 'Persuadir pessoas, marketing, comunicação, influenciar opiniões, fazer networking', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.11', variable: 'interesse_c1', sectionId: 1, questionText: 'Organizar informações, criar sistemas, trabalhar com processos, administração, finanças', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
      { id: 'P1.12', variable: 'interesse_c2', sectionId: 1, questionText: 'Trabalhar com precisão em tarefas detalhadas, revisar, garantir qualidade, seguir normas e padrões', type: 'likert-5', options: [{label: 'Nada a ver', value: '1'}, {label: 'Minha cara', value: '5'}] },
    ],
  },
  // SEÇÃO 2: Valores de Trabalho
  {
    id: 2,
    name: 'Valores de Trabalho',
    title: 'O que realmente importa pra você?',
    instruction: 'Escolha os 3 valores MAIS importantes pra você em um trabalho/carreira.',
    questions: [
        {
            id: 'P2.1', variable: 'valor_escolha', sectionId: 2, questionText: 'Marque os 3 valores que você NÃO ABRE MÃO:', type: 'multiple-choice-multiple',
            options: [
                { label: 'Salário alto', value: 'Salário alto' },
                { label: 'Propósito e impacto', value: 'Propósito e impacto' },
                { label: 'Equilíbrio vida-trabalho', value: 'Equilíbrio vida-trabalho' },
                { label: 'Autonomia e liberdade', value: 'Autonomia e liberdade' },
                { label: 'Reconhecimento', value: 'Reconhecimento' },
                { label: 'Segurança e estabilidade', value: 'Segurança e estabilidade' },
                { label: 'Criatividade', value: 'Criatividade' },
                { label: 'Crescimento constante', value: 'Crescimento constante' },
                { label: 'Trabalho em equipe', value: 'Trabalho em equipe' },
                { label: 'Desafios intelectuais', value: 'Desafios intelectuais' },
                { label: 'Flexibilidade', value: 'Flexibilidade' },
                { label: 'Variedade', value: 'Variedade' },
                { label: 'Competição e resultados', value: 'Competição e resultados' },
                { label: 'Ajudar pessoas', value: 'Ajudar pessoas' },
                { label: 'Estrutura clara', value: 'Estrutura clara' },
            ]
        },
        {
            id: 'P2.2', variable: 'valor_principal', sectionId: 2, questionText: 'Dos 3 que você escolheu, qual é o MAIS importante?', type: 'dropdown',
            // Options are dynamically generated in App.tsx
        }
    ]
  },
  // SEÇÃO 3: Estilo de Trabalho
  {
      id: 3,
      name: 'Estilo de Trabalho',
      title: 'Como você funciona melhor?',
      instruction: 'Não tem certo ou errado - queremos saber como VOCÊ trabalha de verdade.',
      questions: [
        { id: 'P3.1', variable: 'estilo_variedade_profundidade', sectionId: 3, questionText: 'No trabalho, você prefere:', type: 'likert-5', options: [{label: 'Muita variedade', value: '1'}, {label: 'Profundidade', value: '5'}] },
        { id: 'P3.2', variable: 'estilo_social_solo', sectionId: 3, questionText: 'Você trabalha melhor:', type: 'likert-5', options: [{label: 'Sozinho/a', value: '1'}, {label: 'Com pessoas', value: '5'}] },
        { id: 'P3.3', variable: 'estilo_estrutura_autonomia', sectionId: 3, questionText: 'Você prefere:', type: 'likert-5', options: [{label: 'Estrutura clara', value: '1'}, {label: 'Total liberdade', value: '5'}] },
        { id: 'P3.4', variable: 'estilo_ritmo', sectionId: 3, questionText: 'Seu ritmo ideal:', type: 'likert-5', options: [{label: 'Prazos curtos, rápido', value: '1'}, {label: 'Projetos longos, gradual', value: '5'}] },
        { id: 'P3.5', variable: 'estilo_ambiente_ruido', sectionId: 3, questionText: 'Ambiente ideal para você se concentrar:', type: 'likert-5', options: [{label: 'Silêncio total', value: '1'}, {label: 'Movimentado/barulho', value: '5'}] },
        { id: 'P3.6', variable: 'estilo_aprendizado', sectionId: 3, questionText: 'Você aprende melhor:', type: 'multiple-choice-single',
            options: [
                { label: 'Vendo (vídeos, diagramas, observando)', value: 'visual' },
                { label: 'Fazendo (mão na massa, tentativa e erro)', value: 'cinestesico' },
                { label: 'Lendo (textos, livros, artigos)', value: 'leitura_escrita' },
                { label: 'Ouvindo (podcasts, aulas, conversas)', value: 'auditivo' },
                { label: 'Ensinando outros (aprendo quando explico)', value: 'ensinar' },
            ]
        },
        { id: 'P3.8', variable: 'estilo_previsibilidade', sectionId: 3, questionText: 'Quando os planos mudam de última hora, você:', type: 'multiple-choice-single',
            options: [
                { label: 'Me estresso MUITO (preciso de previsibilidade)', value: 'estresse' },
                { label: 'Me adapto OK, mas prefiro avisos com antecedência', value: 'ok_com_aviso' },
                { label: 'Me adapto bem a mudanças', value: 'adapto_bem' },
                { label: 'ADORO imprevistos e mudanças', value: 'adoro_imprevistos' },
            ]
        },
        { id: 'P3.11', variable: 'estilo_comunicacao', sectionId: 3, questionText: 'Em um ambiente de trabalho, qual estilo de comunicação você prefere?', type: 'multiple-choice-single',
            options: [
                { label: 'Direta e concisa, sem rodeios', value: 'direta' },
                { label: 'Detalhada e explicativa, com contexto', value: 'detalhada' },
                { label: 'Principalmente escrita (e-mail, chat)', value: 'escrita' },
                { label: 'Principalmente verbal (reuniões, conversas)', value: 'verbal' },
                { label: 'Uma mistura, dependendo da situação', value: 'mista' },
            ]
        },
      ]
  },
  // SEÇÃO 6: Pergunta Aberta
  {
    id: 4,
    name: 'Pergunta Aberta',
    title: 'Sua história, suas palavras.',
    instruction: 'Se houver algo importante sobre você ou sua busca profissional que não foi perguntado, ou se quiser elaborar mais sobre alguma resposta, use este espaço.',
    questions: [
        {
            id: 'P6.1', variable: 'insight_narrativo', sectionId: 4, questionText: 'Algo mais que queira nos contar?', type: 'text-open'
        }
    ]
  }
];

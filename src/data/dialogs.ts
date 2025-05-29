export type DialogChoice = {
  text: string;
  nextId: string;
};

export type DialogLine = {
  id: string,
  speaker: string,
  text: string,
  choices?: DialogChoice[];
  nextId?: string;
}

interface DialogsI {
  level: number,
  dialogLines: DialogLine[]
}

export type Dialog = DialogLine[];

const username = sessionStorage.getItem("username")

export const dialogs : DialogsI[] = [
  {
    level: 0,
    dialogLines: [
      {
        id: '1',
        speaker: `${username}`,
        text: 'Tenho um projeto importante para a escola amanhã, preciso de algumas folhas para decorar meu trabalho: folhas verdes, flores amarelas, talvez algumas pedras... mas as pedras têm cor feia. O que posso levar no lugar?',
        choices: [
          { text: 'Flores!', nextId: '2' },
          { text: 'As pedras servem', nextId: '2' },
        ],
      },
      {
        id: '2',
        speaker: `${username}`,
        text: 'Agora sim, meu trabalho vai ficar ótimo! Acho que vou levar um desses cogumelos vermelhos!',
        nextId: '3',
      },
      {
        id: '3',
        speaker: `${username}`,
        text: 'Espera aí, de onde surgiu esse buraco? Que estranho... O que será que tem dentro dele?',
        nextId: undefined,
      }
    ]
  },
  {
    level: 1,
    dialogLines: [
      {
        id: '1',
        speaker: `Aunt Ferret`,
        text: `${username}? O que você está fazendo aqui?`,
        nextId: '2',
      },
      {
        id: '2',
        speaker: `${username}`,
        text: 'Tia? Estava buscando coisas para minha lição e caí em um buraco colorido quando fui pegar um cogumelo vermelho',
        nextId: '3',
      },
      {
        id: '3',
        speaker: 'Aunt Ferret',
        text: 'Foi como eu parei aqui também, alguém tem que colocar um aviso naquele lugar',
        nextId: '4',
      },
      {
        id: '4',
        speaker: 'Aunt Ferret',
        text: 'Vem pode entrar, vamos comer e você vai mandar uma mensagem para seus pais',
        nextId: '5',
      },
      {
        id: '5',
        speaker: 'Aunt Ferret',
        text: 'Aqui as coisas são diferentes de lá de casa, aqui as pessoas falam de forma diferente. O único jeito de você ir pra casa é pedindo ao Dr. Bones e ele não entende tudo que falamos',
        nextId: '6',
      },
      {
        id: '6',
        speaker: `${username}`,
        text: 'E como eu vou falar com ele se ele não me entende, você vai falar por mim?',
        nextId: '7',
      },
      {
        id: '7',
        speaker: 'Aunt Ferret',
        text: 'Não posso falar por você ou ele vai achar que você é uma pessoa mal-educada, e vai negar sua saída. Como estou sem algumas coisas e preciso passar na vila para comprar, você vai comigo e vai aprender algumas coisas conversando com as pessoas de lá',
        nextId: '8',
      },
      {
        id: '8',
        speaker: `${username}`,
        text: 'Eles vão me entender?',
        nextId: '9',
      },
      {
        id: '9',
        speaker: 'Aunt Ferret',
        text: 'Entendem melhor que o Dr.Bones. Enquanto isso vamos pensando na mesagem para seus pais. Vamos lá, mother and father é como chamamos o pais por aqui',
        nextId: '10',
      },
      {
        id: '10',
        speaker: 'Aunt Ferret',
        text: 'Mother é mãe, sabia que em muitas linguas mãe começa com M? em inglês falamos mother para mãe e mom que seria mãe de um jeito mais próximo e intimo quando estamos falando com ela ou alguém que conhecemos e falando dela. Como você deve se referir a sua mãe quando conversar com o Dr. Bones?',
        nextId: '11',
      },
      {
        id: '11',
        speaker: `${username}`,
        text: 'Mother, porque eu não conheço ele.',
        nextId: '12',
      },
      {
        id: '12',
        speaker: 'Aunt Ferret',
        text: 'Isso, com pessoas mais formais precisamos falar de forma mai séria. Então se mother é mãe, father é pai, que também pode ser chamado carinhosamente de dad, o que seria pai em uma forma mais descontraída',
        nextId: '13',
      },
      {
        id: '13',
        speaker: `${username}`,
        text: 'Se mother é mãe e father é pai, como se diz "tia" em inglês?',
        nextId: '14',
      },
      {
        id: '14',
        speaker: 'Aunt Ferret',
        text: 'Se diz aunt ou auntie, e aqui no reino me chamam de Aunt Ferret, porque para dizer "furões" em inglês se diz "ferrets". Vamos repassar o que aprendeu até agora',
        nextId: '15',
      },
      {
        id: '15',
        speaker: `${username}`,
        text: 'Mother é mãe e father é pai, tia é aunt e nos somos ferrets',
        nextId: '16',
      },
      {
        id: '16',
        speaker: 'Aunt Ferret',
        text: 'Vamos passar mais uma vez, quando dizemos Mother e Father estamos falando de quem?',
        choices: [
          { text: 'Mother é mãe e father é pai', nextId: '17' },
          { text: 'Mother é mãe e father é furão', nextId: '18' },
        ],
      },
      {
        id: '17',
        speaker: 'Aunt Ferret',
        text: 'Isso! Chamamos mãe de mother e pai de father, muito bem!',
        nextId: '19',
      },
      {
        id: '18',
        speaker: 'Aunt Ferret',
        text: 'Bom você acertou dizendo que mother é mãe, mas father ou dad significa pai, não furão. Furão é ferret. Mas tudo bem, você fez o seu melhor!',
        nextId: '19',
      },
      {
        id: '19',
        speaker: 'Aunt Ferret',
        text: 'Quando as pessoas me chamarem de Aunt Ferret, o que isso quer dizer?',
        choices: [
          { text: 'Tia Furão', nextId: '20' },
          { text: `Tia do(a) ${username}`, nextId: '21' },
        ],
      },
      {
        id: '20',
        speaker: 'Aunt Ferret',
        text: 'Sim, nós somos furões, ou seja ferrets, e eu sou conhecida como tia, que é aunt',
        nextId: '22',
      },
      {
        id: '21',
        speaker: 'Aunt Ferret',
        text: 'Não, embora eu seja só sua tia meu apelido é Aunt Ferret para todas as pessoas.',
        nextId: '22',
      },
      {
        id: '22',
        speaker: 'Aunt Ferret',
        text: 'Então quando você chegar ao Dr.Bones e ele perguntar de quem você sente saudades, você dirá que sente saudades dos seus:',
        choices: [
          { text: 'Father and mother', nextId: '23' },
          { text: 'Dad and mom', nextId: '24' },
        ],
      },
      {
        id: '23',
        speaker: 'Aunt Ferret',
        text: 'Sim, assim ele vai saber o porque você quer voltar!',
        nextId: '25',
      },
      {
        id: '24',
        speaker: 'Aunt Ferret',
        text: 'Dad and mom está certo mas, você vai falar com alguém importante e precisamos usar um jeito mais formal com ele, portanto utilizamos father para pai e mother para mãe.',
        nextId: '25',
      },
      {
        id: '25',
        speaker: 'Aunt Ferret',
        text: 'Agora vamos sair e aprender outros diálogos!',
        nextId: undefined,
      },
    ]
  },
  {
    level: 2,
    dialogLines: [
      {
        id: '1',
        speaker: 'Aunt Ferret',
        text: 'Bem-vindo(a) a fazenda do Sr. Fox, em inglês chamamos fazenda de farm',
        nextId: '2',
      },
      {
        id: '2',
        speaker: 'Sr. Fox',
        text: 'Welcome Aunt Ferret, how are you doing?',
        nextId: '3',
      },
      {
        id: '3',
        speaker: 'Aunt Ferret',
        text: `Hello Mr. Fox! I'm doing great, thank you for asking. This is ${username}, they came to see me. They don’t speak English, can you help them?`,
        nextId: '4',
      },
      {
        id: '4',
        speaker: 'Sr. Fox',
        text: 'Olá, eu sou o senhor Fox, dono desta linda fazenda.',
        nextId: '5',
      },
      {
        id: '5',
        speaker: `${username}`,
        text: 'Minha tia disse que aqui é uma fazenda, que se chama farm em inglês.',
        nextId: '6',
      },
      {
        id: '6',
        speaker: 'Sr. Fox',
        text: 'Isso mesmo! E aqui nessa farm vendemos todo tipo de produto animal. O que vai querer hoje Aunt Ferret?',
        nextId: '7',
      },
      {
        id: '7',
        speaker: 'Aunt Ferret',
        text: `Ovos e frango. Vamos lá ${username}, diga a ele que precisamos de eggs and chicken`,
        nextId: '8',
      },
      {
        id: '8',
        speaker: `${username}`,
        text: 'Precisamos de eggs and chicken Sr. Fox, vamos fazer um jantar',
        nextId: '9',
      },
      {
        id: '9',
        speaker: 'Sr. Fox',
        text: `Que legal ${username}, então vocês querem ovos e frango para jantar. Vou separar os produtos para vocês agora mesmo!`,
        nextId: '10',
      },
      {
        id: '11',
        speaker: 'Aunt Ferret',
        text: `Vamos testar seu conhecimento ${username}. Com o que fazemos uma omelete ou uma gemada?`,
        choices: [
          { text: 'Eggs', nextId: '12' },
          { text: 'Chicken', nextId: '13' },
        ],
      },
      {
        id: '12',
        speaker: 'Aunt Ferret',
        text: 'Sim, ovos servem para várias otimas receitas, doce e salgadas',
        nextId: '14',
      },
      {
        id: '13',
        speaker: 'Sr. Fox',
        text: 'Ops, acho que trocamos de ideias aqui. Chicken significa frango e com frango conseguimos fazer várias receitas, mas omelete não é uma delas...',
        nextId: '14',
      },
      {
        id: '14',
        speaker: 'Aunt Ferret',
        text: 'Onde encontramos os melhores produtos animais? Use essa frase para te ajudar, só precisa completar com a última palavra: "On the ____"',
        choices: [
          { text: 'On the farm', nextId: '15' },
          { text: 'On the far', nextId: '16' },
        ],
      },
      {
        id: '15',
        speaker: 'Aunt Ferret',
        text: 'Isso, agora você já sabe para onde vir quando quiser o alimento com a melhor qualidade',
        nextId: '17',
      },
      {
        id: '16',
        speaker: 'Aunt Ferret',
        text: 'Far tem outro significado em inglês, mesmo que seja uma palavra bem parecida. Precisamos analisar os pequenos detalhes para não cometermos erros nos dialogos',
        nextId: '17',
      },
      {
        id: '17',
        speaker: 'Sr. Fox',
        text: 'Aqui estão os ovos e frango, Aunt Ferret. Bye bye!',
        nextId: '18',
      },
      {
        id: '18',
        speaker: 'Aunt Ferret',
        text: `Muito obrigada Sr. Fox, take care. Diga "bye" para o Sr. Fox ${username}, isso significa "tchau"`,
        nextId: '19',
      },
      {
        id: '19',
        speaker: `${username}`,
        text: 'Bye bye Sr. Fox!',
        nextId: '20',
      },
      {
        id: '20',
        speaker: 'Aunt Ferret',
        text: `Muito bem ${username}!`,
        nextId: undefined,
      },
    ]
  },
  {
    level: 3,
    dialogLines: [
      {
        id: '1',
        speaker: 'Aunt Ferret',
        text: 'Agora nós vamos pegar algumas coisas que precisamos no mercado. Preciso de uvas para um suco e leite para fazer um bolo, então vá até ali e peça para o Frog Jr. Ele vai te vender o que precisa se disser para ele que você procura milk and grapes. Milk é leite, grapes são uvas, então o que você deve pedir?',
        nextId: '2',
      },
      {
        id: '2',
        speaker: `${username}`,
        text: 'Milk and grapes, leite e uvas',
        nextId: '3',
      },
      {
        id: '3',
        speaker: 'Aunt Ferret',
        text: 'Muito bem, acertou. Não esqueça de pedir por favor dizendo "please"',
        nextId: '4',
      },
      {
        id: '4',
        speaker: 'Frog Jr',
        text: 'Welcome to the market! What do you need, friend?',
        nextId: '5',
      },
      {
        id: '5',
        speaker: `${username}`,
        text: 'Hello, I need milk and grapes, please.',
        nextId: '6'
      },
      {
        id: '6',
        speaker: 'Frog Jr',
        text: 'Coming right up!',
        nextId: '7',
      },
      {
        id: '7',
        speaker: 'Aunt Ferret',
        text: `Hi Frog Jr, this is ${username}, they don't understand everything in English yet, just Portuguese, so be patient.`,
        nextId: '8',
      },
      {
        id: '8',
        speaker: 'Frog Jr',
        text: "Oh I see... Well, I don't understand Portugue so I guess we both need to be patient haha.",
        nextId: '9',
      },
      {
        id: '9',
        speaker: 'Aunt Ferret',
        text: '“Ele também não te entende, é uma pena. Mas agradeça ele pela compra, diga obrigado pelo que você comprou, começando com ”Thanks for...',
        choices: [
          { text: 'Thanks for the grapes and milk, Frog Jr', nextId: '11' },
          { text: 'Thanks for the Frog Jr, grapes', nextId: '12' },
        ],
      },
      {
        id: '11',
        speaker: 'Aunt Ferret',
        text: 'Bom trabalho, acertou!',
        nextId: '13',
      },
      {
        id: '12',
        speaker: 'Aunt Ferret',
        text: `Parece que você se confundiu ${username} haha! Você agradeceu as uvas pelo Frog Jr, invés de agradecer o Frog Jr pelas uvas`,
        nextId: '13',
      },
      {
        id: '13',
        speaker: 'Aunt Ferret',
        text: 'Agora diga tchau ao Frog Jr antes de irmos',
        choices: [
          { text: 'Goodbye Frog Jr', nextId: '14' },
          { text: 'Welcome Frog Jr', nextId: '15' },
        ],
      },
      {
        id: '14',
        speaker: 'Aunt Ferret',
        text: `Isso ${username}, acertou. Agora pegue as sacolas e vamos para casa`,
        nextId: '16',
      },
      {
        id: '15',
        speaker: 'Aunt Ferret',
        text: `Ops, você disse bem-vindo para ele invés de se despedir.`,
        nextId: '16',
      },
      {
        id: '16',
        speaker: 'Aunt Ferret',
        text: `Goodbye Frog Jr, say hello to your dad for me.`,
        nextId: undefined,
      },
    ]
  },
  {
    level: 4,
    dialogLines: [
      {
        id: '1',
        speaker: 'Aunt Ferret',
        text: `Sabe ${username}, pensei em ir direto para casa mas olha que lindos vestidos a loja da Miss Duck tem! Vamos entrar e ver um pouco mais.`,
        nextId: '2'
      },
      {
        id: '2',
        speaker: `${username}`,
        text: 'Ok, como se chama essa loja?',
        nextId: '3',
      },
      {
        id: '3',
        speaker: 'Aunt Ferret',
        text: 'Clothing store, ou loja de roupas. Miss Duck vende roupas lindas... Mas ela vai falar em inglês, então quando entrar diga a Miss Duck ”I don’t understand English”, que significa "Eu não entendo inglês"',
        nextId: '4',
      },
      {
        id: '5',
        speaker: 'Ms. Duck',
        text: 'Welcome to my clothing store!',
        nextId: '6',
      },
      {
        id: '6',
        speaker: `${username}`,
        text: 'Hello! I don’t understand English',
        nextId: '7',
      },
      {
        id: '7',
        speaker: 'Ms. Duck',
        text: 'Ah sim, entendi! O que você gostaria de vestir hoje?',
        nextId: '8',
      },
      {
        id: '8',
        speaker: `${username}`,
        text: 'Minha tia gostou de um vestido, eu gostei desta bermuda, como posso pedir essas peças em inglês?',
        nextId: '9',
      },
      {
        id: '9',
        speaker: 'Ms. Duck',
        text: 'Bom, vestido se diz "dress" em inglês, e bermudas são chamadas "shorts"',
        nextId: '10',
      },
      {
        id: '10',
        speaker: `${username}`,
        text: 'Dress and shorts, vestido e bermuda. Entendi!',
        nextId: '11',
      },
      {
        id: '11',
        speaker: 'Ms. Duck',
        text: 'Isso! Agora me diga o que você vai querer levar, antes do nome da peça diga "I’ll take the...":',
        choices: [
          { text: 'I’ll take the shorts', nextId: '12' },
          { text: 'I’ll take the dress', nextId: '13' },
        ],
      },
      {
        id: '12',
        speaker: 'Ms. Duck',
        text: 'Ótimo! Vamos pegar um “shorts” para você',
        nextId: '14',
      },
      {
        id: '13',
        speaker: 'Ms. Duck',
        text: 'Vai ter que brigar com sua tia pelo vestido hahaha!',
        nextId: '14',
      },
      {
        id: '14',
        speaker: 'Ms. Duck',
        text: 'E agora, o que sua tia irá levar? Diga "she chose the..." antes do nome da roupa',
        choices: [
          { text: 'She chose the dress', nextId: '15' },
          { text: 'She chose the shorts', nextId: '16' },
        ],
      },
      {
        id: '15',
        speaker: 'Ms. Duck',
        text: 'Ótimo! Vamos pegar o "dress" para ela',
        nextId: '17',
      },
      {
        id: '16',
        speaker: 'Ms. Duck',
        text: 'Ops, acho que você quis dizer que ela gostou mais do vestido. Vestido em inglês é "dress"',
        nextId: '17',
      },
      {
        id: '17',
        speaker: 'Aunt Ferret',
        text: 'Bom trabalho, agora agradeça e diga adeus a Miss Duck',
        choices: [
          { text: 'Goodbye Ms. Duck!', nextId: '18' },
          { text: 'Goodbye Sr. Duck', nextId: '19' },
        ],
      },
      {
        id: '18',
        speaker: 'Aunt Ferret',
        text: 'Ela adorou você! Agora vamos para casa comer',
        nextId: '20',
      },
      {
        id: '19',
        speaker: 'Aunt Ferret',
        text: 'Ms. é uma referência a damas como a Ms. Duck, Sr. é uma referência a senhores, então podemos usar com o Sr. Fox ou até com Frog Jr, por exemplo, mas não com a Ms. Duck.',
        nextId: '20',
      },
      {
        id: '20',
        speaker: 'Aunt Ferret',
        text: 'Well, bye bye Ms. Duck. Thank you for the clothes',
        nextId: '21',
      },
      {
        id: '21',
        speaker: 'Ms. Duck',
        text: 'Bye ferrets!',
        nextId: undefined,
      },
    ]
  },
  {
    level: 5,
    dialogLines: [
      {
        id: '1',
        speaker: `${username}`,
        text: 'Aunt, agora que já preparamos o jantar, podemos mandar uma mesagem para Father Ferret e Mother Ferret? Eles devem estar preocupados.',
        nextId: '2',
      },
      {
        id: '2',
        speaker: 'Aunt Ferret',
        text: 'Vamos ver se você prestou atenção nas nossas conversas de hoje. Você vai escrever uma mensagem dizendo aos seus pais que sente muita saudade deles, conte também que fomos visitar a vila, compramos roupas e conhecemos pessoas legais',
        nextId: '3',
      },
      {
        id: '3',
        speaker: 'Aunt Ferret',
        text: 'É só ligar o computador e clicar em Message. Isso irá mostrar onde enviar uma mensagem para seus pais',
        nextId: '4',
      },
      {
        id: '4',
        speaker: `${username}`,
        text: 'Queridos Father and Mother, hoje vim visitar Aunt Ferret sem querer, porque cai em um buraco estranho e acabei em um lugar em que falam outra lingua. Aprendi muitas coisas, por exemplo posso chamar a mamãe de mom ou mother, o papai de dad ou father. Estou com muita saudade e mal posso esperar para voltar para casa!',
        nextId: '5'
      },
      {
        id: '5',
        speaker: 'Aunt Ferret',
        text: 'Muito bem, mensagem enviada. Seus pais não vão se preocupar sabendo que você está bem.',
        nextId: '6'
      },
      {
        id: '6',
        speaker: 'Aunt Ferret',
        text: `Se sente pronto(a) para encontrar o Dr. Bones e ir para casa ${username}?`,
        choices: [
          { text: 'Não, estou com medo...', nextId: '7' },
          { text: 'Sim! Mal posso esperar, vou arrebentar.', nextId: '8' },
        ],
      },
      {
        id: '7',
        speaker: 'Aunt Ferret',
        text: 'As vezes precisamos fazer coisas que dão medo, mesmo se parecem difíceis. Eu confio em você, sei que vai conseguir.',
        nextId: '9',
      },
      {
        id: '8',
        speaker: 'Aunt Ferret',
        text: 'Esse é o espírito! Tenho certeza que você vai conseguir',
        nextId: '9',
      },
      {
        id: '9',
        speaker: 'Aunt Ferret',
        text: 'Mas antes de ir, é melhor descansar e comer. Vai precisar se concentrar para conversar com o Dr. Bones.',
        nextId: undefined,
      },
    ]
  },
  {
    level: 6,
    dialogLines: [
      {
        id: '1',
        speaker: 'Aunt Ferret',
        text: `Aqui estamos ${username}, o Dr. Bones está te esperando logo a frente, mas você vai precisar conversar com ele sem ajuda. Seja educado e faça seu melhor para entendê-lo.`,
        nextId: '2',
      },
      {
        id: '2',
        speaker: 'Aunt Ferret',
        text: `Ele só fala inglês, mas talvez tente falar um pouco de Português para que você entenda melhor. Eu acredito em você ${username}, vai lá!`,
        nextId: '3',
      },
      {
        id: '3',
        speaker: `${username}`,
        text: 'Obrigado por tudo Aunt Ferret, não teria conseguido sem você! Eu vou para casa e vou contar tudo que fizessemos para os meus pais!',
        nextId: '4',
      },
      {
        id: '4',
        speaker: 'Aunt Ferret',
        text: 'Isso mesmo, vá para casa e conte tudo aos seus pais, tenho certeza que vão adorar ouvir suas histórias. Agora é hora de ir, vá lá e converse com o Dr. Bones.',
        nextId: '5',
      },
      {
        id: '5',
        speaker: 'Dr. Bones',
        text: 'Hello? É você Aunt Ferret?',
        nextId: '6',
      },
      {
        id: '6',
        speaker: `${username}`,
        text: `No, I'm ${username}.`,
        nextId: '7',
      },
      {
        id: '7',
        speaker: 'Dr. Bones',
        text: 'I see... How can I ajudar você?',
        choices: [
          { text: 'I want to go home. I miss my father and mother', nextId: '9' },
          { text: 'I want to go home. I miss my ferret', nextId: '10' },
        ],
      },
      {
        id: '8',
        speaker: 'Dr. Bones',
        text: 'How can I ajudar você?',
        choices: [
          { text: 'I want to go home. I miss my father and mother', nextId: '9' },
          { text: 'I want to go home. I miss my ferret', nextId: '10' },
        ],
      },
      {
        id: '9',
        speaker: 'Dr. Bones',
        text: `Ok ${username}, you want to go home. But antes, let's talk about seu dia no kingdom.`,
        nextId: '11',
      },
      {
        id: '10',
        speaker: 'Dr. Bones',
        text: `Your ferret? But você é um ferret. Let's go back to the começo, pay attention to my perguntas!`,
        nextId: '8',
      },
      {
        id: '11',
        speaker: 'Dr. Bones',
        text: `Did you visit the farm today?`,
        choices: [
          { text: 'Yes, I visited the farm and met Mr. Fox', nextId: '12' },
          { text: 'Yes, we got a dress and shorts!', nextId: '13' },
        ],
      },
      {
        id: '12',
        speaker: 'Dr. Bones',
        text: `Great! Mr. Fox is very nice and the farm is beautiful.`,
        nextId: '14',
      },
      {
        id: '13',
        speaker: 'Dr. Bones',
        text: `I think you are thinking of the clothing store, or loja de roupas. Let me ask de novo.`,
        nextId: '11',
      },
      {
        id: '14',
        speaker: 'Dr. Bones',
        text: `I'm happy to know you had fun and gostou do kingdom. Ready to go casa?`,
        nextId: '15',
      },
      {
        id: '15',
        speaker: `${username}`,
        text: `Thanks Dr. Bones! I'm ready, open the portal, please.`,
        nextId: '16',
      },
      {
        id: '16',
        speaker: 'Dr. Bones',
        text: `You're welcome ${username}, goodbye!`,
        nextId: '17',
      },
      {
        id: '17',
        speaker: `${username}`,
        text: `Goodbye Dr. Bones!`,
        nextId: undefined,
      },
    ]
  },
]

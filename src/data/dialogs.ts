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
        text: 'Aqui as coisas são diferentes de lá de casa, aqui as pessoas falam de forma diferente. O único jeito de você ir pra casa é pedindo ao Dr Bones e ele não entende tudo que falamos',
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
        text: 'Mother é mãe, sabia que em muitas linguas mãe começa com M? em inglês falamos mother para mãe e mom que seria mãe de um jeito mais próximo e intimo quando estamos falando com ela ou alguém que conhecemos e falando dela. Como você deve se referir a sua mãe quando conversar com o Dr Bones?',
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
        speaker: `${username}`,
        text: 'Hey there! Ready to start the game?',
        choices: [
          { text: 'Yes!', nextId: '2' },
          { text: 'Not yet.', nextId: '3' },
        ],
      },
      {
        id: '2',
        speaker: 'Character A',
        text: 'Awesome! Let’s get going then.',
        nextId: '4',
      },
      {
        id: '3',
        speaker: 'Character A',
        text: 'Alright, take your time.',
        nextId: '4',
      },
      {
        id: '4',
        speaker: 'Player',
        text: 'Let’s do this!',
        nextId: undefined, // End of dialog
      },
    ]
  },
  {
    level: 3,
    dialogLines: [
      {
        id: '1',
        speaker: `${username}`,
        text: 'Hey there! Ready to start the game?',
        choices: [
          { text: 'Yes!', nextId: '2' },
          { text: 'Not yet.', nextId: '3' },
        ],
      },
      {
        id: '2',
        speaker: 'Character A',
        text: 'Awesome! Let’s get going then.',
        nextId: '4',
      },
      {
        id: '3',
        speaker: 'Character A',
        text: 'Alright, take your time.',
        nextId: '4',
      },
      {
        id: '4',
        speaker: 'Player',
        text: 'Let’s do this!',
        nextId: undefined, // End of dialog
      },
    ]
  },
  {
    level: 4,
    dialogLines: [
      {
        id: '1',
        speaker: `${username}`,
        text: 'Hey there! Ready to start the game?',
        choices: [
          { text: 'Yes!', nextId: '2' },
          { text: 'Not yet.', nextId: '3' },
        ],
      },
      {
        id: '2',
        speaker: 'Character A',
        text: 'Awesome! Let’s get going then.',
        nextId: '4',
      },
      {
        id: '3',
        speaker: 'Character A',
        text: 'Alright, take your time.',
        nextId: '4',
      },
      {
        id: '4',
        speaker: 'Player',
        text: 'Let’s do this!',
        nextId: undefined, // End of dialog
      },
    ]
  },
  {
    level: 5,
    dialogLines: [
      {
        id: '1',
        speaker: `${username}`,
        text: 'Hey there! Ready to start the game?',
        choices: [
          { text: 'Yes!', nextId: '2' },
          { text: 'Not yet.', nextId: '3' },
        ],
      },
      {
        id: '2',
        speaker: 'Character A',
        text: 'Awesome! Let’s get going then.',
        nextId: '4',
      },
      {
        id: '3',
        speaker: 'Character A',
        text: 'Alright, take your time.',
        nextId: '4',
      },
      {
        id: '4',
        speaker: 'Player',
        text: 'Let’s do this!',
        nextId: undefined, // End of dialog
      },
    ]
  },
  {
    level: 6,
    dialogLines: [
      {
        id: '1',
        speaker: `${username}`,
        text: 'Hey there! Ready to start the game?',
        choices: [
          { text: 'Yes!', nextId: '2' },
          { text: 'Not yet.', nextId: '3' },
        ],
      },
      {
        id: '2',
        speaker: 'Character A',
        text: 'Awesome! Let’s get going then.',
        nextId: '4',
      },
      {
        id: '3',
        speaker: 'Character A',
        text: 'Alright, take your time.',
        nextId: '4',
      },
      {
        id: '4',
        speaker: 'Player',
        text: 'Let’s do this!',
        nextId: undefined, // End of dialog
      },
    ]
  },
]

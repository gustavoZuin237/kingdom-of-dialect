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
        text: 'Espera aí, de onde surgiu esse portal? Que estranho... Eu devia entrar para ver onde ele leva!',
        nextId: undefined,
      }
    ]
  },
  {
    level: 1,
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

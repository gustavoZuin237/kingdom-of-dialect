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

export type Dialog = DialogLine[];

export const dialogs = [
  {
    level: 1,
    dialogLines: [
      {
        id: '1',
        speaker: 'Character A',
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

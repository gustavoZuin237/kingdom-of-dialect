export interface QuestionListInterface {
  id: number,
  question: string,
  answers: string[],
  correctAnswer: number
}

interface QuestionInterface {
  id: number,
  category: string,
  questionList: QuestionListInterface[],
}

export const questions: QuestionInterface[] = [
    {
      id: 1,
      category: "introduction",
      questionList: [
        {
            id: 1,
            question: "Qual é a maneira correta de se apresentar?",
            answers: [
                "Hi! My name is Maria. I am from Brazil.",
                "Hello! Name Maria. From Brazil I.",
                "Hi! I name Maria. I from Brazil.",
                "Hello! Am Maria. I from Brazil."
              ],
              correctAnswer: 0
        },
        {
            id: 2,
            question: "Qual verbo usamos para falar nosso nome?",
            answers: ["Do", "Have", "Be", "Like"],
            correctAnswer: 2
        },
        {
            id: 3,
            question: "Qual é a forma correta do verbo 'to be' nesta frase?\n'She ___ a teacher.'",
            answers: ["am", "is", "are", "be"],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "Qual dessas frases está gramaticalmente correta?",
            answers: ["I has a dog.", "I have a dog.", "I am have a dog.", "I haves a dog."],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "Qual verbo usamos para falar sobre posse (algo que possuímos)?",
            answers: ["Like", "Have", "Do", "Be"],
            correctAnswer: 1
        },
        {
            id: 6,
            question: "Qual é a forma correta de perguntar o nome de alguém?",
            answers: [
              "Who are you?",
              "How you name?",
              "What is your name?",
              "Who name you?"
            ],
            correctAnswer: 2
        },
      ]
    },
    {
      id: 2,
      category: "animals",
      questionList: [
            {
              id: 1,
              question: "Qual desses animais pode voar?",
              answers: ["Dog", "Elephant", "Bird", "Cat"],
              correctAnswer: 2
            },
            {
              id: 2,
              question: "Qual é o nome correto para 'cachorro' em inglês?",
              answers: ["Cat", "Dog", "Horse", "Mouse"],
              correctAnswer: 1
            },
            {
              id: 3,
              question: "Complete a frase: 'Fish ___ in the water.'",
              answers: ["fly", "run", "swim", "jump"],
              correctAnswer: 2
            },
            {
              id: 4,
              question: "Qual desses animais é um réptil?",
              answers: ["Frog", "Snake", "Rabbit", "Penguin"],
              correctAnswer: 1
            },
            {
              id: 5,
              question: "Qual é o nome correto para 'gato' em inglês?",
              answers: ["Dog", "Lion", "Cat", "Rabbit"],
              correctAnswer: 2
            },
            {
              id: 6,
              question: "Qual animal gosta de comer cenouras?",
              answers: ["Dog", "Rabbit", "Horse", "Cat"],
              correctAnswer: 1
            }
      ]

    },
    {
      id: 3,
      category: "food",
      questionList: [
            {
              id: 1,
              question: "Qual é a frase correta para pedir um menu?",
              answers: [
                "Can I have a bill, please?",
                "Can I have a menu, please?",
                "I want a food, please.",
                "Could I get a drink?"
              ],
              correctAnswer: 1
            },
            {
              id: 2,
              question: "Qual utensílio usamos para cortar alimentos?",
              answers: ["Fork", "Spoon", "Plate", "Knife"],
              correctAnswer: 3
            },
            {
              id: 3,
              question: "Complete a frase: 'I would like to order a ___.'",
              answers: ["drink", "water", "menu", "plate"],
              correctAnswer: 1
            },
            {
              id: 4,
              question: "Como você pede a conta?",
              answers: [
                "Can I get the bill, please?",
                "Can I have a menu?",
                "I want food.",
                "Could I order dessert?"
              ],
              correctAnswer: 0
            },
            {
              id: 5,
              question: "Qual utensílio usamos para beber?",
              answers: ["Glass", "Knife", "Fork", "Plate"],
              correctAnswer: 0
            },
            {
              id: 6,
              question: "Qual termo se refere a uma entrada?",
              answers: ["Main course", "Dessert", "Appetizer", "Drink"],
              correctAnswer: 2
            }
      ]

    },
    {
      id: 4,
      category: "clothes",
      questionList: [
            {
              id: 1,
              question: "Qual é a palavra em inglês para 'calças'?",
              answers: ["Shirt", "Dress", "Pants", "Shoes"],
              correctAnswer: 2
            },
            {
              id: 2,
              question: "Como você pergunta se pode experimentar algo?",
              answers: [
                "Can I wear this?",
                "Can I try this on?",
                "What size is this?",
                "Where can I buy this?"
              ],
              correctAnswer: 1
            },
            {
              id: 3,
              question: "Qual é o termo para 'jaqueta' em inglês?",
              answers: ["Shirt", "Pants", "Jacket", "Shoes"],
              correctAnswer: 2
            },
            {
              id: 4,
              question: "Complete a frase: 'Do you have this in a different ___?'",
              answers: ["size", "color", "style", "material"],
              correctAnswer: 1
            },
            {
              id: 5,
              question: "Qual dessas peças de roupa é feminina?",
              answers: ["Pants", "Shirt", "Dress", "Jacket"],
              correctAnswer: 2
            },
            {
              id: 6,
              question: "Qual é a palavra para 'sapatos' em inglês?",
              answers: ["Shirt", "Dress", "Shoes", "Pants"],
              correctAnswer: 2
            }
      ]

    },
    {
      id: 5,
      category: "family",
      questionList: [
            {
              id: 1,
              question: "Qual é a palavra em inglês para 'mãe'?",
              answers: ["Mother", "Father", "Sister", "Aunt"],
              correctAnswer: 0
            },
            {
              id: 2,
              question: "Como você pergunta quantos irmãos alguém tem?",
              answers: [
                "How many cousins do you have?",
                "How many brothers do you have?",
                "How many siblings do you have?",
                "How many friends do you have?"
              ],
              correctAnswer: 2
            },
            {
              id: 3,
              question: "Qual é o termo para 'avô' em inglês?",
              answers: ["Grandmother", "Uncle", "Brother", "Grandfather"],
              correctAnswer: 3
            },
            {
              id: 4,
              question: "Complete a frase: 'What does your ___ do?'",
              answers: ["brother", "sister", "father", "mother"],
              correctAnswer: 2
            },
            {
              id: 5,
              question: "Qual é a palavra para 'tia' em inglês?",
              answers: ["Aunt", "Sister", "Cousin", "Niece"],
              correctAnswer: 0
            },
            {
              id: 6,
              question: "Como você pergunta se a avó de alguém ainda está viva?",
              answers: [
                "Is your grandmother old?",
                "Is your grandmother happy?",
                "Is your grandmother still alive?",
                "Does your grandmother work?"
              ],
              correctAnswer: 2
            }
      ] 

    }
]
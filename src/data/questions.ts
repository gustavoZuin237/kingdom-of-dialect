export interface QuestionListInterface {
  id: number,
  question: string,
  answers: AnswersInterface[],
  correctAnswer: number
}

interface QuestionInterface {
  category: number,
  questionList: QuestionListInterface[],
}

interface AnswersInterface {
  id: number,
  answer: string
}

export const questions: QuestionInterface[] = [
    {
      category: 1,
      questionList: [
        {
            id: 1,
            question: "Qual é a maneira correta de se apresentar?",
            answers: [
                {
                  id: 1,
                  answer: "Hi! My name is Maria. I am from Brazil.",
                },
                {
                  id: 2,
                  answer: "Hello! Name Maria. From Brazil I.",
                },
                {
                  id: 3,
                  answer: "Hello! Name Maria. From Brazil I.",
                },
                {
                  id: 4,
                  answer: "Hello! Am Maria. I from Brazil.",
                },
              ],
              correctAnswer: 1
        },
        {
            id: 2,
            question: "Qual verbo usamos para falar nosso nome?",
            answers: [
              { id: 1, answer: "Do" },
              { id: 2, answer: "Have" },
              { id: 3, answer: "Be" },
              { id: 4, answer: "Like" }
            ],
            correctAnswer: 3
        },
        {
            id: 3,
            question: "Qual é a forma correta do verbo 'to be' nesta frase?\n'She ___ a teacher.'",
            answers: [
              { id: 1, answer: "am" },
              { id: 2, answer: "is" },
              { id: 3, answer: "are" },
              { id: 4, answer: "be" }
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            question: "Qual dessas frases está gramaticalmente correta?",
            answers: [
              { id: 1, answer: "I has a dog." },
              { id: 2, answer: "I have a dog." },
              { id: 3, answer: "I am have a dog." },
              { id: 4, answer: "I haves a dog." }
            ],
            correctAnswer: 2
        },
        {
            id: 5,
            question: "Qual verbo usamos para falar sobre posse (algo que possuímos)?",
            answers: [
              { id: 1, answer: "Like" },
              { id: 2, answer: "Have" },
              { id: 3, answer: "Do" },
              { id: 4, answer: "Be" }
            ],
            correctAnswer: 2
        },
        {
            id: 6,
            question: "Qual é a forma correta de perguntar o nome de alguém?",
            answers: [
              { id: 1, answer: "Who are you?" },
              { id: 2, answer: "How you name?" },
              { id: 3, answer: "What is your name?" },
              { id: 4, answer: "Who name you?" }
            ],
            correctAnswer: 3
        },
      ]
    },
    {
      category: 2,
      questionList: [
            {
              id: 1,
              question: "Qual desses animais pode voar?",
              answers: [
                { id: 1, answer: "Dog" },
                { id: 2, answer: "Elephant" },
                { id: 3, answer: "Bird" },
                { id: 4, answer: "Cat" }
              ],
              correctAnswer: 3
            },
            {
              id: 2,
              question: "Qual é o nome correto para 'cachorro' em inglês?",
              answers: [
                { id: 1, answer: "Cat" },
                { id: 2, answer: "Dog" },
                { id: 3, answer: "Horse" },
                { id: 4, answer: "Mouse" }
              ],
              correctAnswer: 2
            },
            {
              id: 3,
              question: "Complete a frase: 'Fish ___ in the water.'",
              answers: [
                { id: 1, answer: "fly" },
                { id: 2, answer: "run" },
                { id: 3, answer: "swim" },
                { id: 4, answer: "jump" }
              ],
              correctAnswer: 3
            },
            {
              id: 4,
              question: "Qual desses animais é um réptil?",
              answers: [
                { id: 1, answer: "Frog" },
                { id: 2, answer: "Snake" },
                { id: 3, answer: "Rabbit" },
                { id: 4, answer: "Penguin" }
              ],
              correctAnswer: 2
            },
            {
              id: 5,
              question: "Qual é o nome correto para 'gato' em inglês?",
              answers: [
                { id: 1, answer: "Dog" },
                { id: 2, answer: "Lion" },
                { id: 3, answer: "Cat" },
                { id: 4, answer: "Rabbit" }
              ],
              correctAnswer: 3
            },
            {
              id: 6,
              question: "Qual animal gosta de comer cenouras?",
              answers: [
                { id: 1, answer: "Dog" },
                { id: 2, answer: "Rabbit" },
                { id: 3, answer: "Horse" },
                { id: 4, answer: "Cat" }
              ],
              correctAnswer: 2
            }
      ]

    },
    {
      category: 3,
      questionList: [
            {
              id: 1,
              question: "Qual é a frase correta para pedir um menu?",
              answers: [
                { id: 1, answer: "Can I have a bill, please?" },
                { id: 2, answer: "Can I have a menu, please?" },
                { id: 3, answer: "I want a food, please." },
                { id: 4, answer: "Could I get a drink?" }
              ],
              correctAnswer: 1
            },
            {
              id: 2,
              question: "Qual utensílio usamos para cortar alimentos?",
              answers: [
                { id: 1, answer: "Fork" },
                { id: 2, answer: "Spoon" },
                { id: 3, answer: "Plate" },
                { id: 4, answer: "Knife" }
              ],
              correctAnswer: 3
            },
            {
              id: 3,
              question: "Complete a frase: 'I would like to order a ___.'",
              answers: [
                { id: 1, answer: "drink" },
                { id: 2, answer: "water" },
                { id: 3, answer: "menu" },
                { id: 4, answer: "plate" }
              ],
              correctAnswer: 1
            },
            {
              id: 4,
              question: "Como você pede a conta?",
              answers: [
                { id: 1, answer: "Can I get the bill, please?" },
                { id: 2, answer: "Can I have a menu?" },
                { id: 3, answer: "I want food." },
                { id: 4, answer: "Could I order dessert?" }
              ],
              correctAnswer: 0
            },
            {
              id: 5,
              question: "Qual utensílio usamos para beber?",
              answers: [
                { id: 1, answer: "Glass" },
                { id: 2, answer: "Knife" },
                { id: 3, answer: "Fork" },
                { id: 4, answer: "Plate" }
              ],
              correctAnswer: 0
            },
            {
              id: 6,
              question: "Qual termo se refere a uma entrada?",
              answers: [
                { id: 1, answer: "Main course" },
                { id: 2, answer: "Dessert" },
                { id: 3, answer: "Appetizer" },
                { id: 4, answer: "Drink" }
              ],
              correctAnswer: 2
            }
      ]

    },
    {
      category: 4,
      questionList: [
            {
              id: 1,
              question: "Qual é a palavra em inglês para 'calças'?",
              answers: [
                { id: 1, answer: "Shirt" },
                { id: 2, answer: "Dress" },
                { id: 3, answer: "Pants" },
                { id: 4, answer: "Shoes" }
              ],
              correctAnswer: 2
            },
            {
              id: 2,
              question: "Como você pergunta se pode experimentar algo?",
              answers: [
                { id: 1, answer: "Can I wear this?" },
                { id: 2, answer: "Can I try this on?" },
                { id: 3, answer: "What size is this?" },
                { id: 4, answer: "Where can I buy this?" }
              ],
              correctAnswer: 1
            },
            {
              id: 3,
              question: "Qual é o termo para 'jaqueta' em inglês?",
              answers: [
                { id: 1, answer: "Shirt" },
                { id: 2, answer: "Pants" },
                { id: 3, answer: "Jacket" },
                { id: 4, answer: "Shoes" }
              ],
              correctAnswer: 2
            },
            {
              id: 4,
              question: "Complete a frase: 'Do you have this in a different ___? This one is too small.'",
              answers: [
                { id: 1, answer: "size" },
                { id: 2, answer: "color" },
                { id: 3, answer: "style" },
                { id: 4, answer: "material" }
              ],
              correctAnswer: 1
            },
            {
              id: 5,
              question: "Qual dessas peças de roupa é feminina?",
              answers: [
                { id: 1, answer: "Pants" },
                { id: 2, answer: "Shirt" },
                { id: 3, answer: "Dress" },
                { id: 4, answer: "Jacket" }
              ],
              correctAnswer: 2
            },
            {
              id: 6,
              question: "Qual é a palavra para 'sapatos' em inglês?",
              answers: [
                { id: 1, answer: "Shirt" },
                { id: 2, answer: "Dress" },
                { id: 3, answer: "Shoes" },
                { id: 4, answer: "Pants" }
              ],
              correctAnswer: 2
            }
      ]

    },
    {
      category: 5,
      questionList: [
            {
              id: 1,
              question: "Qual é a palavra em inglês para 'mãe'?",
              answers: [
                { id: 1, answer: "Mother" },
                { id: 2, answer: "Father" },
                { id: 3, answer: "Sister" },
                { id: 4, answer: "Aunt" }
            ],
              correctAnswer: 0
            },
            {
              id: 2,
              question: "Como você pergunta quantos irmãos alguém tem?",
              answers: [
                { id: 1, answer: "How many cousins do you have?" },
                { id: 2, answer: "How many brothers do you have?" },
                { id: 3, answer: "How many siblings do you have?" },
                { id: 4, answer: "How many friends do you have?" }
            ],
              correctAnswer: 2
            },
            {
              id: 3,
              question: "Qual é o termo para 'avô' em inglês?",
              answers: [
                { id: 1, answer: "Grandmother" },
                { id: 2, answer: "Uncle" },
                { id: 3, answer: "Brother" },
                { id: 4, answer: "Grandfather" }
            ],
              correctAnswer: 3
            },
            {
              id: 4,
              question: "Complete a frase: 'What does your ___ do?'",
              answers: [
                { id: 1, answer: "brother" },
                { id: 2, answer: "sister" },
                { id: 3, answer: "father" },
                { id: 4, answer: "mother" }
            ],
              correctAnswer: 2
            },
            {
              id: 5,
              question: "Qual é a palavra para 'tia' em inglês?",
              answers: [
                { id: 1, answer: "Aunt" },
                { id: 2, answer: "Sister" },
                { id: 3, answer: "Cousin" },
                { id: 4, answer: "Niece" }
            ],
              correctAnswer: 0
            },
            {
              id: 6,
              question: "Como você pergunta se a avó de alguém ainda está viva?",
              answers: [
                { id: 1, answer: "Is your grandmother old?" },
                { id: 2, answer: "Is your grandmother happy?" },
                { id: 3, answer: "Is your grandmother still alive?" },
                { id: 4, answer: "Does your grandmother work?" }
            ],
              correctAnswer: 2
            }
      ] 
    }
]
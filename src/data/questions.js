const questions = [
    {
        introduction: [
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
            options: ["Do", "Have", "Be", "Like"],
            correctAnswer: 2
        },
        {
            id: 3,
            question: "Qual é a forma correta do verbo 'to be' nesta frase?\n'She ___ a teacher.'",
            options: ["am", "is", "are", "be"],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "Qual dessas frases está gramaticalmente correta?",
            options: ["I has a dog.", "I have a dog.", "I am have a dog.", "I haves a dog."],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "Qual verbo usamos para falar sobre posse (algo que possuímos)?",
            options: ["Like", "Have", "Do", "Be"],
            correctAnswer: 1
        },
        {
            id: 6,
            question: "Qual é a forma correta de perguntar o nome de alguém?",
            options: [
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
        animals: [
            {
              id: 1,
              question: "Qual desses animais pode voar?",
              options: ["Dog", "Elephant", "Bird", "Cat"],
              correctAnswer: 2
            },
            {
              id: 2,
              question: "Qual é o nome correto para 'cachorro' em inglês?",
              options: ["Cat", "Dog", "Horse", "Mouse"],
              correctAnswer: 1
            },
            {
              id: 3,
              question: "Complete a frase: 'Fish ___ in the water.'",
              options: ["fly", "run", "swim", "jump"],
              correctAnswer: 2
            },
            {
              id: 4,
              question: "Qual desses animais é um réptil?",
              options: ["Frog", "Snake", "Rabbit", "Penguin"],
              correctAnswer: 1
            },
            {
              id: 5,
              question: "Qual é o nome correto para 'gato' em inglês?",
              options: ["Dog", "Lion", "Cat", "Rabbit"],
              correctAnswer: 2
            },
            {
              id: 6,
              question: "Qual animal gosta de comer cenouras?",
              options: ["Dog", "Rabbit", "Horse", "Cat"],
              correctAnswer: 1
            }
        ]

    },
    {
        food: [
            {
              id: 1,
              question: "Qual é a frase correta para pedir um menu?",
              options: [
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
              options: ["Fork", "Spoon", "Plate", "Knife"],
              correctAnswer: 3
            },
            {
              id: 3,
              question: "Complete a frase: 'I would like to order a ___.'",
              options: ["drink", "water", "menu", "plate"],
              correctAnswer: 1
            },
            {
              id: 4,
              question: "Como você pede a conta?",
              options: [
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
              options: ["Glass", "Knife", "Fork", "Plate"],
              correctAnswer: 0
            },
            {
              id: 6,
              question: "Qual termo se refere a uma entrada?",
              options: ["Main course", "Dessert", "Appetizer", "Drink"],
              correctAnswer: 2
            }
        ]

    },
    {
        clothes: [
            {
              id: 1,
              question: "Qual é a palavra em inglês para 'calças'?",
              options: ["Shirt", "Dress", "Pants", "Shoes"],
              correctAnswer: 2
            },
            {
              id: 2,
              question: "Como você pergunta se pode experimentar algo?",
              options: [
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
              options: ["Shirt", "Pants", "Jacket", "Shoes"],
              correctAnswer: 2
            },
            {
              id: 4,
              question: "Complete a frase: 'Do you have this in a different ___?'",
              options: ["size", "color", "style", "material"],
              correctAnswer: 1
            },
            {
              id: 5,
              question: "Qual dessas peças de roupa é feminina?",
              options: ["Pants", "Shirt", "Dress", "Jacket"],
              correctAnswer: 2
            },
            {
              id: 6,
              question: "Qual é a palavra para 'sapatos' em inglês?",
              options: ["Shirt", "Dress", "Shoes", "Pants"],
              correctAnswer: 2
            }
        ]

    },
    {
        family: [
            {
              id: 1,
              question: "Qual é a palavra em inglês para 'mãe'?",
              options: ["Mother", "Father", "Sister", "Aunt"],
              correctAnswer: 0
            },
            {
              id: 2,
              question: "Como você pergunta quantos irmãos alguém tem?",
              options: [
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
              options: ["Grandmother", "Uncle", "Brother", "Grandfather"],
              correctAnswer: 3
            },
            {
              id: 4,
              question: "Complete a frase: 'What does your ___ do?'",
              options: ["brother", "sister", "father", "mother"],
              correctAnswer: 2
            },
            {
              id: 5,
              question: "Qual é a palavra para 'tia' em inglês?",
              options: ["Aunt", "Sister", "Cousin", "Niece"],
              correctAnswer: 0
            },
            {
              id: 6,
              question: "Como você pergunta se a avó de alguém ainda está viva?",
              options: [
                "Is your grandmother old?",
                "Is your grandmother happy?",
                "Is your grandmother still alive?",
                "Does your grandmother work?"
              ],
              correctAnswer: 2
            }
        ] 

    },
    {
        finalLevel: [
            {
              id: 1,
              question: "Qual é a palavra em inglês para 'carro'?",
              options: ["Car", "Bike", "Train", "Bus"],
              correctAnswer: 0
            },
            {
              id: 2,
              question: "Como você diz 'eu gosto de pizza' em inglês?",
              options: [
                "I like pizza.",
                "I want pizza.",
                "I eat pizza.",
                "I have pizza."
              ],
              correctAnswer: 0
            },
            {
              id: 3,
              question: "Qual é a palavra em inglês para 'cachorro'?",
              options: ["Cat", "Dog", "Bird", "Fish"],
              correctAnswer: 1
            },
            {
              id: 4,
              question: "Como você pergunta 'Onde fica o banheiro?' em inglês?",
              options: [
                "Where is the food?",
                "Where is the bathroom?",
                "Where do you live?",
                "Where are you from?"
              ],
              correctAnswer: 1
            },
            {
              id: 5,
              question: "Qual é a palavra para 'sapatos' em inglês?",
              options: ["Shoes", "Pants", "Hat", "Shirt"],
              correctAnswer: 0
            },
            {
              id: 6,
              question: "Como você diz 'Qual é o seu nome?' em inglês?",
              options: [
                "What is your name?",
                "How old are you?",
                "Where are you going?",
                "What do you do?"
              ],
              correctAnswer: 0
            },
            {
              id: 7,
              question: "Qual é a palavra em inglês para 'maçã'?",
              options: ["Orange", "Banana", "Grape", "Apple"],
              correctAnswer: 3
            },
            {
              id: 8,
              question: "Como você pergunta 'Você tem irmãos?' em inglês?",
              options: [
                "Do you have friends?",
                "Do you have siblings?",
                "Do you have pets?",
                "Do you have a car?"
              ],
              correctAnswer: 1
            },
            {
              id: 9,
              question: "Qual é a palavra em inglês para 'mesa'?",
              options: ["Chair", "Table", "Sofa", "Bed"],
              correctAnswer: 1
            },
            {
              id: 10,
              question: "Como você diz 'Eu quero beber água' em inglês?",
              options: [
                "I want to eat water.",
                "I want to drink water.",
                "I need water.",
                "I like water."
              ],
              correctAnswer: 1
            },
            {
              id: 11,
              question: "Qual é a palavra em inglês para 'irmã'?",
              options: ["Brother", "Sister", "Cousin", "Aunt"],
              correctAnswer: 1
            },
            {
              id: 12,
              question: "Como você pergunta 'Onde você mora?' em inglês?",
              options: [
                "Where do you live?",
                "What do you do?",
                "How are you?",
                "Where are you from?"
              ],
              correctAnswer: 0
            }
        ]
    }
]
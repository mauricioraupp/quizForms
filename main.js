questions = [

    {

        question: "Qual é o objetivo principal do Artigo 7º da Constituição Federal?",

        answers: [

            "Regular o comércio exterior.",

            "Garantir direitos e garantias para os trabalhadores.",

            "Estabelecer regras para a administração pública.",

        ],

        true_answer: 1,

    },

    {

        question: "O Artigo 7º da Constituição Federal garante o direito a férias anuais remuneradas. Qual é a duração mínima dessas férias?",

        answers: [

            "10 dias.",

            "20 dias.",

            "30 dias.",

        ],

        true_answer: 2,

    },

    {

        question: "De acordo com o Artigo 7º, qual é o direito garantido aos trabalhadores em relação ao descanso semanal?",

        answers: [

            "Um dia de descanso a cada 15 dias.",

            "Um dia de descanso a cada 7 dias.",

            "Um dia de descanso a cada 5 dias.",

        ],

        true_answer: 1,

    },

    {

        question: "Qual é a duração mínima da licença-maternidade garantida pelo Artigo 7º da Constituição?",

        answers: [

            "60 dias.",

            "90 dias.",

            "120 dias",

        ],

        true_answer: 2,

    },

    {

        question: "O Artigo 7º estabelece que o trabalhador deve receber uma remuneração proporcional ao tempo trabalhado em caso de demissão. Qual é o nome dessa remuneração?",

        answers: [

            "Indenização.",

            "Seguro-desemprego",

            "Fundo de Garantia do Tempo de Serviço (FGTS).",

        ],

        true_answer: 2,

    },

    {

        question: "O Artigo 7º garante o direito à aposentadoria. Qual é a principal característica desse direito?",

        answers: [

            "Aposentadoria integral com base em tempo de serviço.",

            "Aposentadoria proporcional com base em contribuições.",

            "Aposentadoria opcional com base em idade.",

        ],

        true_answer: 0,

    },

    {

        question: "Qual é o direito garantido pelo Artigo 7º em relação ao trabalho noturno?",

        answers: [

            "Jornada reduzida.",

            "Aumento de 50% no salário."

            "Descanso compensatório.",

        ],

        true_answer: 1,

    },

    {

        question: "O Artigo 7º assegura aos trabalhadores o direito a um ambiente de trabalho seguro e saudável. Qual é a principal medida para garantir essa segurança?",

        answers: [

            "Monitoramento contínuo.",

            "Equipamentos de proteção individual.",

            "Treinamento apenas para funcionários novos.",

        ],

        true_answer: 1,

    },

    {

        question: "De acordo com o Artigo 7º, quais são os direitos garantidos aos trabalhadores urbanos e rurais?",

        answers: [

            "Apenas os direitos básicos.",

            "Os mesmos direitos, com diferenças nas condições de trabalho.",

            "Direitos exclusivos para trabalhadores urbanos.",

        ],

        true_answer: 1,

    },

    {

        question: "O Artigo 7º assegura que os trabalhadores têm direito a um seguro contra acidentes de trabalho. Qual é o nome desse seguro?",

        answers: [

            "Seguro-desemprego",

            "Previdência social.",

            "Seguro de acidentes de trabalho.",

        ],

        true_answer: 1,

    },

];



const quiz = document.querySelector('#quiz')

const template = document.querySelector('template')



const true_answers = new Set()

const totalQuestions = questions.length

const showScore = document.querySelector('#score span')



for(const item of questions) {

    const quizItem = template.content.cloneNode(true)

    quizItem.querySelector('h3').textContent = item.question



    for(const answer of item.answers) {

        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        dt.querySelector('span').textContent = answer

        dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item))

        dt.querySelector('input').value = item.answers.indexOf(answer)

        dt.querySelector('input').onchange = (event) => {

            const isTrue = event.target.value == item.true_answer



            true_answers.delete(item)

            if(isTrue) {

                true_answers.add(item)

            }

            showScore.textContent = true_answers.size + ' de ' + totalQuestions

        }



        quizItem.querySelector('dl').appendChild(dt)

    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)

    }

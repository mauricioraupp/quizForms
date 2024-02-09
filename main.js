const questions = [
    {
        question: "O que é deficiência intelectual?",
        answers: [
            "Uma condição que afeta apenas a memória.",
            "Uma condição que afeta a capacidade de aprender e entender.",
            "Uma condição que afeta apenas a capacidade de se comunicar verbalmente.",
        ],
        true_answer: 1,
    },
    {
        question: "Quais são algumas causas comuns de deficiência intelectual?",
        answers: [
            "Exposição a altas temperaturas.",
            "Fatores genéticos ou lesões cerebrais durante o nascimento.",
            "Falta de atividade física.",
        ],
        true_answer: 1,
    },
    {
        question: "Qual é a diferença entre deficiência intelectual e deficiência de desenvolvimento?",
        answers: [
            "Não há diferença, são termos intercambiáveis.",
            "Deficiência de desenvolvimento é uma categoria mais ampla.",
            "Deficiência intelectual é uma categoria mais ampla.",
        ],
        true_answer: 2,
    },
    {
        question: "Quais são alguns sinais comuns de deficiência intelectual em crianças?",
        answers: [
            "Rápido desenvolvimento da linguagem e habilidades motoras.",
            "Dificuldade em compreender instruções simples.",
            "Hiperfoco em uma única área de interesse.",
        ],
        true_answer: 1,
    },
    {
        question: "Qual é uma abordagem eficaz no tratamento de pessoas com deficiência intelectual?",
        answers: [
            "Exclusão social para evitar sobrecarga sensorial.",
            "Intervenção precoce e apoio personalizado.",
            "Minimização do acesso a recursos educacionais.",
        ],
        true_answer: 1,
    },
    {
        question: "Como as deficiências intelectuais podem afetar a vida diária?",
        answers: [
            "Elas não têm impacto significativo na vida diária.",
            "Podem tornar tarefas cotidianas mais desafiadoras.",
            "Aumentam a independência e a autonomia.",
        ],
        true_answer: 1,
    },
    {
        question: "Qual é uma estratégia importante para apoiar a inclusão de pessoas com deficiência intelectual na comunidade?",
        answers: [
            "Isolamento social para evitar situações estressantes.",
            "Fornecer oportunidades de educação inclusiva e participação em atividades.",
            "Limitar o acesso a ambientes sociais.",
        ],
        true_answer: 1,
    },
    {
        question: "Quais são alguns mitos comuns sobre deficiência intelectual?",
        answers: [
            "Pessoas com deficiência intelectual são sempre incapazes de aprender.",
            "Pessoas com deficiência intelectual são sempre talentosas em todas as áreas.",
            "Deficiência intelectual é uma escolha pessoal.",
        ],
        true_answer: 0,
    },
    {
        question: "Qual é a importância do apoio da família para pessoas com deficiência intelectual?",
        answers: [
            "O apoio da família não é significativo.",
            "O apoio da família pode ajudar a promover independência e autoestima.",
            "O apoio da família pode causar mais estresse e ansiedade.",
        ],
        true_answer: 1,
    },
    {
        question: "Quais são alguns recursos disponíveis para pessoas com deficiência intelectual?",
        answers: [
            "Acesso limitado a educação e serviços de saúde.",
            "Serviços de apoio, terapias e programas de inclusão social.",
            "Nenhum recurso disponível.",
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
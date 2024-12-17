const questions = [
    {
        question: "Quel joueur a remporté le Ballon d'Or 2023 ?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Karim Benzema", "Erling Haaland"],
        correct: "Lionel Messi"
    },
    {
        question: "Quel club détient le record du plus grand nombre de victoires en Ligue des Champions ?",
        options: ["Real Madrid", "AC Milan", "Liverpool", "FC Barcelone"],
        correct: "Real Madrid"
    },
    {
        question: "Quel pays a remporté la Coupe du Monde 2018 ?",
        options: ["Allemagne", "Brésil", "France", "Argentine"],
        correct: "France"
    },
    {
        question: "Quel gardien de but français a remporté la Coupe du Monde 1998 ?",
        options: ["Fabien Barthez", "Hugo Lloris", "Bernard Lama", "Grégory Coupet"],
        correct: "Fabien Barthez"
    },
    {
        question: "Quel joueur est considéré comme le meilleur buteur de tous les temps en Ligue 1 française ?",
        options: ["Zlatan Ibrahimović", "Thierry Henry", "Jean-Pierre Papin", "Olivier Giroud"],
        correct: "Jean-Pierre Papin"
    },
    {
        question: "Quelle équipe a remporté la Coupe des Confédérations 2017 ?",
        options: ["Allemagne", "Chili", "Mexique", "Portugal"],
        correct: "Chili"
    },
    {
        question: "Qui est le joueur le plus capé de l'équipe nationale française ?",
        options: ["Lilian Thuram", "Hugo Lloris", "Didier Deschamps", "Thierry Henry"],
        correct: "Lilian Thuram"
    },
    {
        question: "Quel joueur a marqué le plus grand nombre de buts en une saison de la Ligue des Champions (2013-2014) ?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Luis Suárez"],
        correct: "Cristiano Ronaldo"
    },
    {
        question: "Quelle équipe a remporté la Ligue Europa en 2020 ?",
        options: ["Manchester United", "Chelsea", "Inter Milan", "Séville"],
        correct: "Séville"
    },
    {
        question: "Quel joueur est le meilleur buteur de l'histoire de la Premier League anglaise ?",
        options: ["Wayne Rooney", "Alan Shearer", "Thierry Henry", "Frank Lampard"],
        correct: "Alan Shearer"
    },
    {
        question: "Quel est le record de buts en une seule Coupe du Monde ?",
        options: ["6 buts", "8 buts", "10 buts", "12 buts"],
        correct: "10 buts"
    },
    {
        question: "Quelle équipe a gagné la Coupe d'Afrique des Nations en 2019 ?",
        options: ["Sénégal", "Maroc", "Nigeria", "Algérie"],
        correct: "Algérie"
    },
    {
        question: "Quel est le joueur le plus cher du marché des transferts de l'histoire du football ?",
        options: ["Neymar", "Kylian Mbappé", "Cristiano Ronaldo", "Gareth Bale"],
        correct: "Neymar"
    },
    {
        question: "Quelle équipe a remporté le plus de fois la Copa Libertadores ?",
        options: ["Boca Juniors", "River Plate", "Peñarol", "Palmeiras"],
        correct: "Boca Juniors"
    },
    {
        question: "Quel joueur détient le record de sélections en équipe nationale brésilienne ?",
        options: ["Cafu", "Dani Alves", "Pelé", "Roberto Carlos"],
        correct: "Dani Alves"
    },
    {
        question: "Quel joueur a marqué le plus de buts en une saison de Ligue 1 française ?",
        options: ["Zlatan Ibrahimović", "Jean-Pierre Papin", "Alexandre Lacazette", "Pierre-Emerick Aubameyang"],
        correct: "Jean-Pierre Papin"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Les éléments HTML
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");
const scoreText = document.getElementById("score");
const correctionsDiv = document.getElementById("corrections");
const correctionBtn = document.getElementById("correction-btn");

// Charger une question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;
    optionsContainer.innerHTML = ""; // Vider les options précédentes
    selectedAnswer = null;

    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(button, option));
        optionsContainer.appendChild(button);
    });
}

//   sélection réponse
function selectAnswer(button, option) {
    // Réinitialiser les styles des autres boutons
    const buttons = document.getElementsByClassName("option-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
    }

    // Sélection option
    selectedAnswer = option;
    button.style.backgroundColor = "#d3d3d3"; // Marque la réponse comme sélectionnée
}

// Passer à la question suivante
nextButton.addEventListener("click", () => {
    if (!selectedAnswer) {
        alert("Veuillez sélectionner une réponse avant de continuer !");
        return;
    }

    if (selectedAnswer === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Afficher résultats
function showResults() {
    questionText.classList.add("hidden");
    optionsContainer.classList.add("hidden");
    nextButton.classList.add("hidden");
    resultDiv.classList.remove("hidden");
    scoreText.innerText = score;
}

// Afficher corrections
correctionBtn.addEventListener("click", () => {
    correctionsDiv.innerHTML = "";
    questions.forEach((question, index) => {
        const correction = document.createElement("div");
        correction.innerHTML = `
            <h4>Question ${index + 1} : ${question.question}</h4>
            <p>Réponse correcte : ${question.correct}</p>
        `;
        correctionsDiv.appendChild(correction);
    });
    correctionsDiv.classList.remove("hidden");
});

// Charger la première question
loadQuestion();

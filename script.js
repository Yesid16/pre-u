
        const questions = [
        {
        question: "Si 15 metros de tela cuestan 300 euros, ¿cuánto costarán 25 metros de la misma tela?",
        options: ["400 euros", "450 euros", "500 euros", "600 euros"],
        correct: 2
        },
        {
        question: "Todos los perros son mamíferos. Todos los mamíferos tienen corazón. Por lo tanto:",
        options: ["Algunos perros tienen corazón", "Todos los perros tienen corazón", "Solo algunos mamíferos tienen corazón", "Ningún perro tiene corazón"],
        correct: 1
    },
    {
        question: "Un automóvil recorre 120 kilómetros con 8 litros de gasolina. ¿Cuántos kilómetros recorrerá con 15 litros de gasolina?",
        options: ["180 kilómetros", "225 kilómetros", "240 kilómetros", "300 kilómetros"],
        correct: 1
        },
        {
        question: "Si 7 máquinas pueden producir 1400 unidades en una semana, ¿cuántas unidades producirán 10 máquinas en el mismo período?",
        options: ["2000 unidades", "2400 unidades", "2800 unidades", "3000 unidades"],
        correct: 0
    },
    {
        question: "Un ciclista recorre 45 kilómetros en 3 horas. ¿Cuántas horas necesitará para recorrer 120 kilómetros a la misma velocidad?",
        options: ["6 horas", "7 horas", "8 horas", "9 horas"],
        correct: 2
    },
    {
        question: "Si A es mayor que B y B es mayor que C, entonces:",
        options: ["A es menor que C", "A es igual a C", "A es mayor que C", "No se puede determinar la relación entre A y C"],
        correct: 2
        },
    {
        question: "Si hoy es lunes, dentro de 100 días será:",
        options: ["Viernes", "Sábado", "Domingo", "Miércoles"],
        correct: 3
    },
    {
        question: "Si los gatos son más rápidos que los ratones y los ratones son más rápidos que las tortugas, entonces:",
        options: ["Las tortugas son más rápidas que los gatos", "Los gatos son más rápidos que las tortugas", "Los ratones son más lentos que las tortugas", "Las tortugas y los ratones tienen la misma velocidad"],
        correct: 1
        },
    {
        question: "¿Cuál es el resultado de 3<sup>4</sup>?",
        options: ["27", "64", "81", "243"],
        correct: 2
    },
    {
        question: "Si 2<sup>x</sup> = 32, ¿cuál es el valor de x?",
        options: ["4", "5", "6", "7"],
        correct: 1
        },
        {
            question: "¿Cuál es el valor de 10<sup>0</sup>?",
            options: ["0", "1", "10", "100"],
            correct: 1
            },
                {
                    question: "Si 5 trabajadores pueden completar una obra en 10 días, ¿cuántos días necesitarán 8 trabajadores para completar la misma obra?",
                    options: ["4 días", "6.25 días", "8 días", "12.5 días"],
                    correct: 1
                },
    {
        question: "¿Cuál es el valor de (5<sup>3</sup>) ÷ (5<sup>1</sup>)?",
        options: ["5", "25", "125", "625"],
        correct: 1
    },
    {
        question: "Si 9<sup>y</sup> = 81, ¿cuál es el valor de y?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "¿Cuál es el valor de 2<sup>5</sup> × 2<sup>3</sup>?",
        options: ["32", "128", "256", "512"],
        correct: 2
    },
    {
        question: "Si 4<sup>3</sup> = 2<sup>x</sup>, ¿cuál es el valor de x?",
        options: ["3", "6", "8", "12"],
        correct: 1
    },
    {
        question: "Una madre tiene tres hijos. La diferencia de edad entre el primer y el segundo hijo es de 2 años, y la diferencia entre el segundo y el tercer hijo es de 3 años. Si la edad del tercer hijo es 5 años, ¿cuál es la edad del primer hijo?",
        options: ["10 años", "8 años", "7 años", "5 años"],
        correct: 0
    },
    {
        question: "¿Cuál es el resultado de (3<sup>2</sup>)<sup>3</sup>?",
        options: ["27", "81", "243", "729"],
        correct: 3
    },
    {
        question: "Si 5<sup>x</sup> = 125, ¿cuál es el valor de x?",
        options: ["2", "3", "4", "5"],
        correct: 1
    },
    {
        question: "Si (2<sup>3</sup>) × (4<sup>2</sup>) = 2<sup>y</sup>, ¿cuál es el valor de y?",
        options: ["8", "9", "10", "7"],
        correct: 3
    }
];


        let currentQuestion = 0;
        var preguntasCorrectas = 0;

        function showQuestion() {
            
            if (currentQuestion == 3) {
                const final = document.getElementById('container');
                final.innerHTML = `<div id="finalMessage">
                                        <div class="cont">
                                            <p>Eres la mejor, mi amor.    ¡Debes confiar en ti!<br><br>¡Te amo!</p>
                                         </div>
                                    </div>`
                const cambiarimage = document.getElementById('finalMessage');
                cambiarimage.style.backgroundImage = "url(https://i.pinimg.com/originals/84/79/b7/8479b793248451d0c44b1bb85182b7ae.jpg)"
                                    

            alert(`Sacaste ${preguntasCorrectas} de 20`)
            }else{
            const question = questions[currentQuestion];
            const quizContainer = document.getElementById('quiz');
            quizContainer.innerHTML = `
                <div class="question">${question.question}</div>
                <ul class="options">
                    ${question.options.map((option, index) => `
                        <li><button onclick="checkAnswer(${index})">${option}</button></li>
                    `).join('')}
                </ul>
                <div id="message" class="message"></div>
            `;
        }
        const finall = document.getElementById('iniciar');
        finall.innerHTML = ``;
        }

        function checkAnswer(selected) {
            const question = questions[currentQuestion];
            const messageDiv = document.getElementById('message');

            if (selected === question.correct) {
                messageDiv.textContent = "¡Correcto! Eres increíble.";
                preguntasCorrectas ++;
            } else {
                messageDiv.textContent = "No importa, sigues siendo maravillosa.";
            }

            currentQuestion++;
            setTimeout(() => {
                messageDiv.textContent = '';
                showQuestion();
            }, 1000);
        }

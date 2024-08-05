const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button button');
const clearButton = document.getElementById('c');
const equalButton = document.querySelector('.button button:last-child');

let currentExpression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        // Se o botão pressionado for '=' (igual), calculamos a expressão
        if (buttonText === '=') {
            calculate();
            return;
        }

        // Se o botão pressionado for 'C', limpa o display
        if (buttonText === 'C') {
            clearDisplay();
            return;
        }

        // Adiciona o número ou operador ao display
        currentExpression += buttonText;
        display.value = currentExpression;
    });
});

function calculate() {
    try {
        currentExpression = eval(currentExpression);
        display.value = currentExpression;
    } catch (error) {
        display.value = 'Erro';
    }
}

function clearDisplay() {
    currentExpression = '';
    display.value = '';
}

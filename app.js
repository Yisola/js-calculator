const numberBtn = document.querySelectorAll('.numButton');
const operatorBtn = document.querySelectorAll('.opeButton')
const clearBtn = document.querySelector('.clearButton')
const equalBtn = document.querySelector('.equalButton')
const textValue = document.querySelector('#textval');
const allButtons = document.querySelectorAll('input');

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        textValue.value += button.value;
    })
})

clearBtn.addEventListener('click', function () {
    textValue.value = "";
})

equalBtn.addEventListener('click', function() {
    let output = textValue.value.slice(0, textValue.value.length - 1);
    textValue.value = eval(output);
})

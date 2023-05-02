const minus = document.querySelectorAll('.js-minus');
const plus = document.querySelectorAll('.js-plus')
const total = document.querySelectorAll('.js-total-result')
const minusSingleMove = document.querySelector('.js-minus-single-move')
const answerSingleMove = document.querySelector('.js-answer-single-move')
const plusSingleMove = document.querySelector('.js-plus-single-move')

console.log (minusSingleMove)
const refresh = document.querySelector('.js-refresh')
const reset = document.querySelector('.js-reset')

minus.forEach((element, index) => {
    element.onclick = () => {
        total[index].innerHTML = parseInt(total[index].textContent) - 1
    }
})

plus.forEach((element, index) => {
    element.onclick = () => {
        total[index].innerHTML = parseInt(total[index].textContent) + 1
    }
})

minusSingleMove.addEventListener('click', () => {
    answerSingleMove.innerHTML = parseInt(answerSingleMove.textContent) - 1
})

plusSingleMove.addEventListener('click', () => {
    answerSingleMove.innerHTML = parseInt(answerSingleMove.textContent) + 1
})

refresh.addEventListener('click', () => {
    total.innerHTML = Number(total.innerHTML) + Number(answerSingleMove.innerHTML)

    answerSingleMove.innerHTML = '0';
})

reset.addEventListener('click', () => {
    total.innerHTML = '0'
    answerSingleMove.innerHTML = '0'
})
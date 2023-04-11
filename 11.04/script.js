const minus = document.querySelector('.js-minus');
const plus = document.querySelector('.js-plus')
const total = document.querySelector('.js-total-result')
const minusSingleMove = document.querySelector('.js-minus-single-move')
const answerSingleMove = document.querySelector('.js-answer-single-move')
const plusSingleMove = document.querySelector('.js-plus-single-move')
const refresh = document.querySelector('.js-refresh')
minus.addEventListener('click', () => {
    total.innerHTML = parseInt(total.textContent) - 1
})

plus.addEventListener('click', () => {
    total.innerHTML = parseInt(total.textContent) + 1
})

minusSingleMove.addEventListener('click', () => {
    answerSingleMove.innerHTML = parseInt(answerSingleMove.textContent) - 1
})

plusSingleMove.addEventListener('click', () => {
    answerSingleMove.innerHTML = parseInt(answerSingleMove.textContent) + 1
})

refresh.addEventListener('click', () => {
    total.innerHTML =Number (total.innerHTML) + Number
    (answerSingleMove.innerHTML)

    answerSingleMove.innerHTML = '0';
})
const plusins = document.querySelector('.js-plus');
const inputins = document.querySelector('.js-input');

const Add = (cipars1, cipars2) => {
 return cipars1 + cipars2
}

const Substract = (cipars1, cipars2) => {
    return cipars1 - cipars2 
}

const Multiply = (cipars1, cipars2) => {
    return cipars1 * cipars2
}

const Divide = (cipars1, cipars2) => {
    return cipars1 / cipars2
}

plusins.addEventListener('click', () => {
    console.log("Mani nospieda")
})
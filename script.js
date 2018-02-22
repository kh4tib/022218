const button = document.querySelector('.button-checkbox');
const tick = document.querySelector('.checkbox-tick');
const base = document.querySelector('.checkbox-base');
const text = document.querySelector('.list-text');

button.addEventListener('click', () => {
    tick.classList.toggle('js-check-tick-on');
    base.classList.toggle('js-checkbox-base');
    text.classList.toggle('js-list-text');
});
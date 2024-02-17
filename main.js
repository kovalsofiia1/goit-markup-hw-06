const mobile = document.querySelector('.mobile-menu');
const openBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const closeFormBtn = document.querySelector('.close-btn');


const orderBtn = document.querySelector('.order-button');
const orderForm = document.querySelector('.modal-backdrop');

const OPEN_MENU = 'is-open';

openBtn.addEventListener('click', () => {
    mobile.classList.add(OPEN_MENU);
})

closeBtn.addEventListener('click', () => {
    mobile.classList.remove(OPEN_MENU);
})

orderBtn.addEventListener('click', () => {
    orderForm.classList.add(OPEN_MENU);
})

closeFormBtn.addEventListener('click', () => {
    orderForm.classList.remove(OPEN_MENU);
})
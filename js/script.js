let card = document.getElementById('card');
let success = document.getElementById('success');
let form = document.querySelector('.form');
let text = document.querySelector('.text');

const formSubmit = document.getElementById('form');
let email = document.getElementById('email');
let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

let messageShow = () => {
    text.classList.add('active');
    form.classList.add('active');
    card.classList.add('active');
}
let messageHidde = () => {
    text.classList.remove('active');
    form.classList.remove('active');
    card.classList.remove('active');
}

formSubmit.addEventListener('submit', e => {
    e.preventDefault();
    if (!validEmail.test(email.value)) {
        messageShow();
        success.classList.add('error');
        setTimeout(() => {
            messageHidde();
            success.classList.remove('error');
        }, 3000);
    } else {
        messageShow();
        success.classList.add('active');
        formSubmit.reset();
        setTimeout(() => {
            messageHidde();
            success.classList.remove('active');
        }, 3000);
    }
});
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('burger').onclick = function showBurger() {
        document.getElementById('toggle-bar').classList.toggle('hidden');
        document.querySelector('.bg-one').classList.toggle('x');
        document.querySelector('.bg-two').classList.toggle('x');
    };
    document.getElementById('contact-click').onclick = function removeBurger() {
        document.getElementById('toggle-bar').classList.toggle('hidden');
        document.querySelector('.bg-one').classList.toggle('x');
        document.querySelector('.bg-two').classList.toggle('x');
    };
});
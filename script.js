function revealCard() {
    const card = document.querySelector('.slide-card');
    const windowHeight = window.innerHeight;
    const elementTop = card.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
        card.classList.add('active');
    }
}

window.addEventListener('scroll', revealCard);
window.addEventListener('load', revealCard);

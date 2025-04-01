function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('open');
    hamburger.classList.toggle('active');
}

function closeMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.remove('open');
    hamburger.classList.remove('active');
}

document.addEventListener('click', (e) => {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('open');
        hamburger.classList.remove('active');
    }
});


AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out-quad',
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
 
    document.getElementById('successMessage').classList.remove('hidden');
    this.reset();
    
 
    setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
    }, 5000);
});


document.querySelectorAll('input, textarea').forEach(element => {
    element.addEventListener('focus', () => {
        const label = element.previousElementSibling;
        if(label) {
            label.style.transform = 'translateY(-24px)';
            label.style.color = '#2dd4bf';
        }
    });

    element.addEventListener('blur', () => {
        const label = element.previousElementSibling;
        if (label && !element.value) {
            label.style.transform = 'translateY(0)';
            label.style.color = '#9ca3af';
        }
    });
});
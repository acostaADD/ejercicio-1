// Mostrar mensaje de bienvenida cuando carga la página
window.addEventListener('DOMContentLoaded', () => {
    alert('¡Bienvenido/a a mi sitio web! 🌟');
});

// Animación al hacer clic en los elementos de la lista
const skills = document.querySelectorAll('li');

skills.forEach(skill => {
    skill.addEventListener('click', () => {
        skill.classList.add('clicked');

        // Quitar la clase después de un momento
        setTimeout(() => {
            skill.classList.remove('clicked');
        }, 500);
    });
});

// Manejo del botón de contacto
const contactButton = document.querySelector('.contact p a');

if (contactButton) {
    contactButton.addEventListener('click', (e) => {
        console.log('Botón de contacto presionado.');
    });
}

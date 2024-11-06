// Seleccionamos el botón de cambiar modo
const switchButton = document.getElementById('modo-switch');

// Agregamos un evento al botón para cambiar entre claro y oscuro
switchButton.addEventListener('click', () => {
    // Cambia la clase del cuerpo para el modo oscuro
    document.body.classList.toggle('dark-mode');
    
    // Cambia la clase de otros elementos como los enlaces y las secciones
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');

    // Alternamos la clase 'dark-mode' en varios elementos
    links.forEach(link => link.classList.toggle('dark-mode'));
    sections.forEach(section => section.classList.toggle('dark-mode'));
    footer.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');

    // Cambiamos el texto del botón según el modo
    if (document.body.classList.contains('dark-mode')) {
        switchButton.textContent = 'Modo Claro';
    } else {
        switchButton.textContent = 'Modo Oscuro';
    }
});


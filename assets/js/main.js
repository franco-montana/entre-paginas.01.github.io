document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const menuIcon = document.getElementById('menu-icon');
    const gridList = document.querySelector('.grid-list');
    
    // Crear y añadir el overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // Toggle del menú
    function toggleMenu() {
        gridList.classList.toggle('active');
        overlay.classList.toggle('active');
        // Opcional: Prevenir scroll cuando el menú está abierto
        document.body.style.overflow = gridList.classList.contains('active') ? 'hidden' : '';
    }

    // Event listeners
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Cerrar al hacer click en un enlace
    gridList.querySelectorAll('.grid-link').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Cerrar al hacer click en el overlay
    overlay.addEventListener('click', toggleMenu);

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && gridList.classList.contains('active')) {
            toggleMenu();
        }
    });
});
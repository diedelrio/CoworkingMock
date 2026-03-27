// 1. Manejo de apertura de submenús
function toggleSub(el) {
    const sub = el.nextElementSibling;
    const isAlreadyOpen = sub.classList.contains('open');
    
    // Opcional: Cerrar otros submenús abiertos antes de abrir este (Acordeón)
    document.querySelectorAll('.nav-sub').forEach(s => s.classList.remove('open'));
    
    if(sub && !isAlreadyOpen) {
        sub.classList.add('open');
    }
}

// 2. Cierre automático al SELECCIONAR una opción
document.querySelectorAll('.nav-sub-link').forEach(link => {
    link.addEventListener('click', () => {
        // Buscamos el submenú padre y le quitamos la clase open
        const parentSub = link.closest('.nav-sub');
        if(parentSub) {
            parentSub.classList.remove('open');
        }
        console.log("Opción seleccionada, cerrando submenú...");
    });
});

// 3. Cierre automático al RETIRAR el mouse de la navegación
const mainNav = document.getElementById('mainNav');
mainNav.addEventListener('mouseleave', () => {
    document.querySelectorAll('.nav-sub').forEach(sub => {
        sub.classList.remove('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('sideOverly');

    function toggleMenu() {
        mainNav.classList.toggle('show');
        overlay.classList.toggle('hidden');
        // Evitar que el fondo haga scroll cuando el menú está abierto
        document.body.style.overflow = mainNav.classList.contains('show') ? 'hidden' : '';
    }

    if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if(overlay) overlay.addEventListener('click', toggleMenu);
});

// Tu función toggleSub actual se mantiene igual
function toggleSub(button) {
    const subMenu = button.nextElementSibling;
    if (subMenu) {
        subMenu.classList.toggle('open');
    }
}
const btn = document.getElementById('menuBtn');
if (btn) {
    console.log("Botón encontrado con éxito");
} else {
    console.error("El botón 'menuBtn' no existe en el DOM. Revisa el ID en tu HTML.");
}
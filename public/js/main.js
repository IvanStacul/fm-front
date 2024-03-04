// ================ Menu mobile ================
// Este script permite mostrar y ocultar el menú mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); // Muestra el menú si está oculto y viceversa
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // Oculta el menú
    });

    // Opcional: Cerrar el menú al seleccionar un enlace (si se desea este comportamiento)
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); // Oculta el menú
        });
    });
});


// ================ Dark mode ================
// Este script permite cambiar entre el tema claro y oscuro
const html = document.documentElement;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const toggleThemeButton = document.getElementById(
    "toggle-dark-mode"
);

const matchMedia = window.matchMedia(
    "(prefers-color-scheme: dark)"
);

const systemDarkMode = matchMedia.matches;

updateTheme(systemDarkMode);

function updateTheme(darkMode) {
    if (darkMode) {
        html.classList.add("dark");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    } else {
        html.classList.remove("dark");
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
    }
}

toggleThemeButton.addEventListener("click", () => {
    html.classList.toggle("dark");
    sunIcon.classList.toggle("hidden");
    moonIcon.classList.toggle("hidden");
});

matchMedia.addEventListener("change", ({ matches }) => {
    updateTheme(matches);
});

// ================ Sort menu ================
// Selecciona los elementos del DOM necesarios
const menuButton = document.querySelector("#sort-button");
const menu = document.querySelector('[role="menu"]');

// Oculta el menú inicialmente
menu.classList.add('transform', 'opacity-0', 'scale-95', 'transition', 'ease-in', 'duration-75');

// Función para mostrar el menú
function showMenu() {
    menu.classList.remove('transform', 'opacity-0', 'scale-95', 'transition', 'ease-in', 'duration-75');
    menu.classList.add('transform', 'opacity-100', 'scale-100', 'transition', 'ease-out', 'duration-100');
}

// Función para ocultar el menú
function hideMenu() {
    menu.classList.remove('transform', 'opacity-100', 'scale-100', 'transition', 'ease-out', 'duration-100');
    menu.classList.add('transform', 'opacity-0', 'scale-95', 'transition', 'ease-in', 'duration-75');
}

// Evento clic del botón
menuButton.addEventListener('click', function (event) {
    event.stopPropagation();
    if (menu.classList.contains('opacity-100')) {
        hideMenu();
    } else {
        showMenu();
    }
});

// Evento click del documento
document.addEventListener('click', function () { hideMenu(); });


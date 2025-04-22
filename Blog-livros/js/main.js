// Atualizar o ano do copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Menu mobile (opcional - pode ser expandido)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.style.display = 'none';
    
    const header = document.querySelector('header');
    header.insertBefore(menuToggle, document.querySelector('.menu'));
    
    const menu = document.querySelector('.menu');
    
    function toggleMenu() {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            menu.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            menu.style.display = 'block';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});
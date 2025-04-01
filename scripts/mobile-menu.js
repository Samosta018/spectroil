document.addEventListener('DOMContentLoaded', function() {
    const navBtn = document.querySelector('.header__nav-btn');
    const navList = document.querySelector('.header__nav-list');
    const navLinks = document.querySelectorAll('.header__nav-link');
    const body = document.body;

    // Функция для переключения меню
    function toggleMenu() {
        navBtn.classList.toggle('active');
        navList.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

    // Обработчик для кнопки меню
    navBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Обработчики для навигационных ссылок
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Закрываем меню, если оно открыто на мобильном устройстве
            if (window.innerWidth <= 768 && navBtn.classList.contains('active')) {
                toggleMenu();
            }
            
            // Стандартное поведение ссылки (скролл к якорю)
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Для старых браузеров
                    setTimeout(() => {
                        window.location.hash = targetId;
                    }, 1000);
                }
            }
        });
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (navList.classList.contains('active') && 
            !e.target.closest('.header__nav') && 
            !e.target.closest('.header__nav-btn')) {
            toggleMenu();
        }
    });

    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navList.classList.contains('active')) {
            toggleMenu();
        }
    });
});
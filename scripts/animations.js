// animations.js
document.addEventListener('DOMContentLoaded', function() {
    // Удаляем параллакс-эффект полностью (основная причина белого фона)
    
    // Анимация появления элементов при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('active');
            }
        });
    };

    // Добавляем классы для анимации
    const sections = ['developments', 'services', 'achievements', 'team', 'news'];
    sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            const children = sectionElement.querySelectorAll(':scope > *');
            children.forEach((child, index) => {
                child.classList.add('animate-on-scroll');
                child.style.setProperty('--animation-delay', `${index * 0.1}s`);
            });
        }
    });

    // Инициализация анимаций
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Анимация наведения для карточек (упрощенная версия без параллакса)
    const setupCardHover = function() {
        const cards = document.querySelectorAll('.header__info-card, .developments__card, .services__card, .achievements__card, .team__card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            });
        });
    };
    setupCardHover();

    // Анимация текста в шапке
    const animateHeaderText = function() {
        const headerTitle = document.querySelector('.header__info-title');
        const headerDesc = document.querySelector('.header__info-desc');
        
        if (headerTitle) {
            headerTitle.style.opacity = '0';
            headerTitle.style.transform = 'translateY(20px)';
            headerTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                headerTitle.style.opacity = '1';
                headerTitle.style.transform = 'translateY(0)';
            }, 300);
        }
        
        if (headerDesc) {
            headerDesc.style.opacity = '0';
            headerDesc.style.transform = 'translateY(20px)';
            headerDesc.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
            
            setTimeout(() => {
                headerDesc.style.opacity = '1';
                headerDesc.style.transform = 'translateY(0)';
            }, 600);
        }
    };
    animateHeaderText();

    // Плавное появление изображений
    const lazyLoadImages = function() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.6s ease';
                    
                    setTimeout(() => {
                        img.style.opacity = '1';
                    }, 100);
                    
                    observer.unobserve(img);
                }
            });
        }, { threshold: 0.1 });
        
        images.forEach(img => imageObserver.observe(img));
    };
    lazyLoadImages();

    // Анимация кнопок (упрощенная)
    const animateButtons = function() {
        const buttons = document.querySelectorAll('button, .btn');
        
        buttons.forEach(button => {
            button.addEventListener('mousedown', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'scale(1)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    };
    animateButtons();
});
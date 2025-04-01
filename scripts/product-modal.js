document.addEventListener('DOMContentLoaded', function() {
    // Кнопки "Подробнее"
    const detailBtn1 = document.querySelectorAll('.developments__card-btn')[0];
    const detailBtn2 = document.querySelectorAll('.developments__card-btn')[1];
    
    // Модальные окна
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    
    // Функции открытия/закрытия
    function openModal(modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal(modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    // Обработчики для кнопок
    detailBtn1.addEventListener('click', () => openModal(modal1));
    detailBtn2.addEventListener('click', () => openModal(modal2));
    
    // Закрытие по кнопке
    document.querySelectorAll('.product-modal__close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.product-modal');
            closeModal(modal);
        });
    });
    
    // Закрытие по клику вне окна
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('product-modal')) {
            closeModal(e.target);
        }
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.product-modal.show').forEach(modal => {
                closeModal(modal);
            });
        }
    });
});
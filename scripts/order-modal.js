document.addEventListener('DOMContentLoaded', function() {
    // Элементы модального окна
    const modal = document.getElementById('orderModal');
    const modalClose = document.querySelector('.modal__close');
    const orderForm = document.getElementById('orderForm');
    const serviceNameElement = document.getElementById('selectedService');
    
    // Все кнопки "Заказать услугу"
    const orderButtons = document.querySelectorAll('.services__card-btn');
    
    // Открытие модального окна
    orderButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Получаем название услуги из карточки
        const card = this.closest('.services__card, .developments__card');
        const serviceName = card.querySelector('.services__card-name, .developments__card-name').textContent;
        
        // Устанавливаем название услуги в модальном окне
        serviceNameElement.textContent = serviceName;
        
        // Показываем модальное окно
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
      });
    });
    
    // Закрытие модального окна
    modalClose.addEventListener('click', function() {
      closeModal();
    });
    
    // Закрытие при клике вне модального окна
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    // Закрытие при нажатии Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });
    
    // Обработка отправки формы
    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Собираем данные формы
      const formData = new FormData(this);
      const data = {
        service: serviceNameElement.textContent,
        name: formData.get('name'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
      };
      
      // Здесь можно добавить отправку данных на сервер
      console.log('Данные заказа:', data);
      
      // Показываем сообщение об успехе
      alert(`Спасибо, ${data.name}! Ваша заявка на услугу "${data.service}" отправлена. Мы свяжемся с вами в ближайшее время.`);
      
      // Закрываем модальное окно и сбрасываем форму
      closeModal();
      this.reset();
    });
    
    // Функция закрытия модального окна
    function closeModal() {
      modal.classList.remove('show');
      document.body.style.overflow = ''; // Возвращаем прокрутку страницы
    }
  });
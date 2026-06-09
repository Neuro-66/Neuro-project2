document.addEventListener('DOMContentLoaded', () => {
    // 1. Фильтрация услуг по категориям
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Сброс активности всех кнопок фильтра
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Установка активности текущей кнопки
            button.classList.add('active');
            // Получение значения data-filter выбранной кнопки
            const filterValue = button.getAttribute('data-filter');
            // Перебор всех карточек услуг и отображение/скрытие в зависимости от фильтра
            serviceCards.forEach(card => {
                if (filterValue === 'all') {
                    // Если фильтр "all", показать все карточки
                    card.style.display = '';
                } else if (card.classList.contains(filterValue)) {
                    // Если карточка содержит класс, соответствующий фильтру, показать её
                    card.style.display = '';
                } else {
                    // В противном случае скрыть карточку
                    card.style.display = 'none';
                }
            });
        });
    });
    // 2. Переход к специальным предложениям при нажатии на кнопку "Купить" в блоке "О компании"
    const blogBookBtn = document.querySelector('#we .book-btn');
    if (blogBookBtn) {
        blogBookBtn.addEventListener('click', () => {
            // Плавно прокручиваем страницу к секции "services"
            document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
            //  Активация фильтра "Специальное предложение"
            const specialBtn = Array.from(filterButtons).find(b => b.getAttribute('data-filter') === 'special');
            if (specialBtn) {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                specialBtn.classList.add('active');
                serviceCards.forEach(card => {
                    if (card.classList.contains('special')) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    }
    // 3. Открытие и закрытие формы обратной связи
    const bookButtons = document.querySelectorAll('#services .book-btn');
    const callbackForm = document.getElementById('callback-form');
    const closeFormButton = document.getElementById('close-form');
    // При нажатии на любую кнопку "Купить" в секции "Услуги" показать форму обратной связи
    bookButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            callbackForm.classList.add('show');
            callbackForm.style.display = 'flex'; // Для правильного отображения flex контейнера
        });
    });
    // При нажатии на кнопку закрытия формы, скрыть форму
    closeFormButton.addEventListener('click', () => {
        callbackForm.classList.remove('show');
        //Небольшая задержка перед скрытием, чтобы анимация закрытия успела завершиться
        setTimeout(() => {
            callbackForm.style.display = 'none';
        }, 300);
    });
    // 4. Обработка лайков и дизлайков (код без изменений)
    const reactionButtons = document.querySelectorAll('.reaction-btn');
    reactionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isLike = button.classList.contains('like-btn');
            const isDislike = button.classList.contains('dislike-btn');
            const parent = button.closest('.review-item');
            const likeCountSpan = parent.querySelector('.like-count');
            const dislikeCountSpan = parent.querySelector('.dislike-count');
            const likeImg = parent.querySelector('.like-btn .icon-img');
            const dislikeImg = parent.querySelector('.dislike-btn .icon-img');
            let likes = parseInt(likeCountSpan.textContent);
            let dislikes = parseInt(dislikeCountSpan.textContent);
            const isActiveLike = likeImg.classList.contains('active');
            const isActiveDislike = dislikeImg.classList.contains('active');

            if (isLike) {
                if (isActiveLike) {
                    likes--;
                    likeImg.classList.remove('active');
                } else {
                    likes++;
                    likeImg.classList.add('active');
                    if (isActiveDislike) {
                        dislikes--;
                        dislikeImg.classList.remove('active');
                    }
                }
            } else if (isDislike) {
                if (isActiveDislike) {
                    dislikes--;
                    dislikeImg.classList.remove('active');
                } else {
                    dislikes++;
                    dislikeImg.classList.add('active');
                    if (isActiveLike) {
                        likes--;
                        likeImg.classList.remove('active');
                    }
                }
            }
            likeCountSpan.textContent = likes;
            dislikeCountSpan.textContent = dislikes;
        });
    });
    // 5. Кнопка прокрутки вверх (код без изменений)
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

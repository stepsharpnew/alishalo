gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Проверяем, является ли устройство сенсорным
if (ScrollTrigger.isTouch !== 1) {

	// Инициализация ScrollSmoother для десктопов
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true,
	});

	// Анимация для hero-section
	gsap.fromTo('.hero-section', 
		{ opacity: 1 }, 
		{ 
			opacity: 0,
			scrollTrigger: {
				trigger: '.hero-section',
				start: 'end',
				end: '820',
				scrub: true,
			},
		}
	);

	// Анимация галереи слева
	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
	itemsL.forEach(item => {
		gsap.fromTo(item, 
			{ opacity: 0, x: -50 }, 
			{ 
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true,
				},
			}
		);
	});

	// Анимация галереи справа
	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
	itemsR.forEach(item => {
		gsap.fromTo(item, 
			{ opacity: 0, x: 50 }, 
			{ 
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-750',
					end: 'top',
					scrub: true,
				},
			}
		);
	});

} else {
	// Настройки для мобильных устройств (сенсорных)
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 0.5, // Меньше сглаживания для мобильных
		effects: false, // Отключение эффектов для оптимизации
	});

	// Упрощенная анимация для hero-section
	gsap.fromTo('.hero-section', 
		{ opacity: 1 }, 
		{ 
			opacity: 0, // Частичная прозрачность
			scrollTrigger: {
				trigger: '.hero-section',
				start: 'top',
				end: '800', // Меньший диапазон
				scrub: true,
			},
		}
	);

	// Анимация для галереи (с вылетом)
	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
	itemsL.forEach(item => {
		gsap.fromTo(item, 
			{ opacity: 0, x: -30 }, // Уменьшено смещение для мобильных
			{ 
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: 'top 90%', // Раньше старт анимации
					end: 'top 60%',
					scrub: true,
				},
			}
		);
	});

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
	itemsR.forEach(item => {
		gsap.fromTo(item, 
			{ opacity: 0, x: 30 }, // Уменьшено смещение для мобильных
			{ 
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: 'top 90%', // Раньше старт анимации
					end: 'top 60%',
					scrub: true,
				},
			}
		);
	});
}

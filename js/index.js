var slider = document.querySelector('.swiper-container');

var mySwiper = new Swiper(slider, {
	//slidesPerView: 3,
	// spaceBetween: 40,
	updateOnWindowResize: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	// loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// 580: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 20,
		// 	loop: true,
		// },
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 0,
			loop: true,
		},
		1025: {
			slidesPerView: 3,
			spaceBetween: 27,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},			
		},
		1920: {
			slidesPerView: 3,
			spaceBetween: 27,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		},

	},
});

function toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	var popup = document.getElementById('popup');
	popup.classList.toggle('active');
	document.body.classList.toggle('active')
};

var phoneMask = document.getElementById('phone');
var im = new Inputmask('+7(999)-999-99-99');
im.mask(phoneMask)

document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);



		// if (error === 0) {
		// 	form.classList.add('_sending');
		// 	// let response = await fetch('mail.php', {
		// 	// 	method: 'POST',
		// 	// 	body: formData
		// 	// });
		// 	if (response.ok) {
		// 		let result = await response.json();
		// 		alert(result.message);
		// 		formPreview.innerHTML = '';
		// 		form.reset();
		// 	} else {
		// 		alert('Ошибка')
		// 	}
		// } else {
		// 	alert('Заполните обязателные поля')
		// }
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_name')) {
				if (nameTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function nameTest(input) {
		return !/^\w+([a-zа-яё])+$/.test(input.value);
	}
});

$(document).ready(function() {
	$('.toggle').click(function() {
		$('.toggle').toggleClass('active-menu');
		$('.list__item--top').toggleClass('active-menu');
		document.body.classList.toggle('active');
		$('.header__button-phone-mobile').toggleClass('inactive');
	})
})
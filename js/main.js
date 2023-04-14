
///===== Carousel logos

new Splide('#image-carousel', {
	type: 'loop',
	drag: 'free',
	focus: 'center',
	perPage: 5,
	arrows: false,
	pagination: false,
	autoScroll: {
		speed: 1,
	},
}).mount(window.splide.Extensions);


new Splide('#image-carousel1', {
	type: 'loop',
	drag: 'free',
	focus: 'center',
	perPage: 5,
	arrows: false,
	pagination: false,
	autoScroll: {
		speed: -1,
	},
}).mount(window.splide.Extensions);

//////==============


///=========== Delete/On grayscaleFilter

const firstCarousel = document.getElementById('image-carousel');
const secondCarousel = document.getElementById('image-carousel1');


const grayScaleFilter = function (e) {
	if (e.target.classList.contains('splide__slide')) {
		const targetElem = e.target;
		const siblingElem = targetElem.closest('.splide__list').querySelectorAll('.splide__slide');

		siblingElem.forEach(el => {
			if (el !== targetElem) {
				targetElem.style.filter = `grayscale(${this}%)`;
			}
		});
	}
};

firstCarousel.addEventListener('mouseover', grayScaleFilter.bind(0));
firstCarousel.addEventListener('mouseout', grayScaleFilter.bind(100));

secondCarousel.addEventListener('mouseover', grayScaleFilter.bind(0));
secondCarousel.addEventListener('mouseout', grayScaleFilter.bind(100));

//=======================




////// SECTION appearance

const allSections = document.querySelectorAll('.section')

const appearanceSection = function (entries, observer) {
	const entry = entries[0];
	if (!entry.isIntersecting) return;
	entry.target.classList.remove('section__hidden');
	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
	root: null,
	threshold: 0.2,
});

allSections.forEach(function (section) {
	sectionObserver.observe(section);
	section.classList.add('section__hidden');
});


////=========================


///===== POP UP FORM


const openModulWindowButton = document.getElementById('modul__window-button');
const form = document.querySelector('.contact__form');



openModulWindowButton.addEventListener('click', function () {
	if (!form.classList.contains('form__display-block')) {
		form.classList.add('form__display-block')

	} else {
		form.classList.remove('form__display-block')
	};

});

////===== SOCIAL SCALE

const socialLinks = document.querySelectorAll('.target__link')

socialLinks.forEach(elem => {
	elem.addEventListener('mouseover', () => {
		elem.classList.add('social__icons__scale');
		elem.addEventListener('mouseout', () => {
			elem.classList.remove('social__icons__scale');
		})
	})
});


//============== header__scale



const headerListElems = document.querySelectorAll('.header__target-link');

headerListElems.forEach(elem => {
	elem.addEventListener('mouseover', () => {
		elem.classList.add('header__links__scale');
		elem.addEventListener('mouseout', () => {
			elem.classList.remove('header__links__scale');
		})
	})
});

//=================


function smooth(e) {

	e.preventDefault();
	if (e.target.classList.contains('header__navigation-link')) {
		const href = e.target.getAttribute('href');
		document.querySelector(href).scrollIntoView({
			behavior: 'smooth'
		});
	}
}

const behaviorHeader = document.querySelector('.header__list').addEventListener('click', smooth)

const behaviorFooter = document.querySelector('.nav__links').addEventListener('click', smooth)









//===== FORM VALIDATION
const mainForm = document.querySelector('.main__form')



const formInputs = document.querySelectorAll('.input');

const inputP = document.querySelectorAll('.input__p')

const inputEmail = document.querySelector('.input__email')
const inputCheckbox = document.querySelector('.checkbox__input')

// console.log(formInputs, inputEmail, inputCheckbox, inputP);

// const personData = document.querySelector('.person-data')



function validateEmail(email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

mainForm.onsubmit = function () {
	let emailVal = inputEmail.value;
	let emptyInputs = Array.from(formInputs).filter(input => input.value === '')

	formInputs.forEach(function (input) {
		if (input.value === '') {
			input.parentElement.classList.add('error')
		} else {
			input.parentElement.classList.remove('error')
		}
	})

	if (emptyInputs.length !== 0) {
		return false;
	}


	if (!validateEmail(emailVal)) {
		inputEmail.parentElement.classList.add('error');
		return false;
	} else {
		inputEmail.parentElement.classList.remove('error')
	}


	if (!inputCheckbox.checked) {
		console.log('gfdsgfdsgfsdgfdsfgfdsfgsdf');
		inputCheckbox.parentElement.classList.add('checkbox__error');
		return false;

	} else {
		inputCheckbox.parentElement.classList.remove('checkbox__error')

	}

};





////===== COPY MAIL

const btnCopy = document.querySelector('.copy__mail')
const linkWasCop = document.querySelector('.copy__link')

document.body.onclick = (e) => {
	console.log(e);
	const elem = e.target;
	if (elem.classList.contains('copy__mail')) {
		navigator.clipboard.writeText('corporate@meta-chain.tech');
		btnCopy.style.backgroundColor = '#F1F1F1';
		linkWasCop.classList.add('copy__link__block');

		let time = function () {
			linkWasCop.classList.remove('copy__link__block')
		}
		setTimeout(time, 3000)



	}
}
btnCopy.addEventListener('mousedown', function () {
	btnCopy.style.backgroundColor = '#315EC7'

})



//////////////////// POLICY



const btnsPolicy = document.querySelectorAll('.btn-policy');
console.log(btnsPolicy);

btnsPolicy.forEach(e => {
	e.addEventListener('click', function () {
		document.querySelector('.privat__policy').style.display = 'none'
	})
});
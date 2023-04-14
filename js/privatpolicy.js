const socialLinks = document.querySelectorAll('.target__link')

socialLinks.forEach(elem => {
	elem.addEventListener('mouseover', () => {
		elem.classList.add('social__icons__scale');
		elem.addEventListener('mouseout', () => {
			elem.classList.remove('social__icons__scale');
		})
	})
});





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
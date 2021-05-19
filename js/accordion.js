document.addEventListener('DOMContentLoaded', () => {
	const featureLinkElems = document.querySelectorAll('.feature__link');
	const featureSubElems = document.querySelectorAll('.feature-sub');

	featureLinkElems.forEach((elem, index) => {
		elem.addEventListener('click', () => {
			if (elem.classList.contains('feature__link_active')) {
				elem.classList.remove('feature__link_active');
				elem.nextElementSibling.classList.add('hidden')
			}
			else {
				featureSubElems.forEach((featureSubElem) => {
					featureSubElem.classList.add('hidden');
				});
				featureLinkElems.forEach((featureLinkElem) => {
					featureLinkElem.classList.remove('feature__link_active');
				});
				elem.classList.toggle('feature__link_active');
				elem.nextElementSibling.classList.toggle('hidden')
			}
		});
	});
});
// Add event listener to each photo
const photos = document.querySelectorAll('.photo');

photos.forEach((photo) => {
	photo.addEventListener('click', () => {
		// Open a lightbox with the full-size image
		const imgSrc = photo.querySelector('img').src;
		const lightbox = document.createElement('div');
		lightbox.className = 'lightbox';
		lightbox.innerHTML = `<img src="${imgSrc}" alt="Full-size image">`;
		document.body.appendChild(lightbox);

		// Add event listener to close the lightbox
		lightbox.addEventListener('click', () => {
			lightbox.remove();
		});
	});
});
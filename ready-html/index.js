document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger-menu');
	const navLinks = document.querySelector('.nav-links');

	hamburger.addEventListener('click', () => {
		if (navLinks.classList.contains('active')) {
			navLinks.classList.add('closing'); 
			setTimeout(() => {
				navLinks.classList.remove('active', 'closing'); 
			}, 300); 
		} else {
			navLinks.classList.add('active'); 
		}
	});
});

document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', function (event) {
	  event.preventDefault();
	  const targetId = this.getAttribute('href').substring(1);
	  const targetElement = document.getElementById(targetId);
  
	  if (targetElement) {
		window.scrollTo({
		  top: targetElement.offsetTop,
		  behavior: 'smooth',
		});
	  }
	});
  });
document.documentElement.classList.add('js');

const yearElement = document.getElementById('year');
if (yearElement) {
	yearElement.textContent = new Date().getFullYear();
}

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
	toggle.addEventListener('click', () => {
		const expanded = toggle.getAttribute('aria-expanded') === 'true';
		toggle.setAttribute('aria-expanded', String(!expanded));
		navLinks.classList.toggle('open');
	});

	navLinks.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			toggle.setAttribute('aria-expanded', 'false');
			navLinks.classList.remove('open');
		});
	});
}

const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 }
		);
		reveals.forEach((el) => observer.observe(el));
	} else {
		reveals.forEach((el) => el.classList.add('is-visible'));
	}
}


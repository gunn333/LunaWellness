function showSection(sectionId) {
	const sections = document.querySelectorAll('.content-section');
	sections.forEach(section => {
		if (section.id === sectionId) {
			section.style.display = 'block';
			section.scrollIntoView({ behavior: 'smooth' });
		} else {
			section.style.display = 'none';
		}
	});
}

function changeLanguage() {
	const language = document.getElementById('language').value;
	const elements = document.querySelectorAll('[data-lang-en]');

	elements.forEach(element => {
		element.textContent = element.getAttribute(`data-lang-${language}`);
	});
}

function updateProgress(sectionId) {
	const section = document.getElementById(sectionId);
	const checkboxes = section.querySelectorAll('input[type="checkbox"]');
	const progressBar = section.querySelector('.progress-bar');
	const totalSteps = checkboxes.length;
	let completedSteps = 0;

	checkboxes.forEach(checkbox => {
		if (checkbox.checked) {
			completedSteps++;
		}
	});

	const progressPercent = (completedSteps / totalSteps) * 100;
	progressBar.style.width = `${progressPercent}%`;

	if (progressPercent === 100) {
		showModal();
	}
}

function showModal() {
	const modal = document.getElementById('congratulations-modal');
	modal.style.display = 'block';
}

function closeModal() {
	const modal = document.getElementById('congratulations-modal');
	modal.style.display = 'none';
}

window.addEventListener('load', () => {
	updateProgress('tampons');
	updateProgress('menstrual-cups');
	updateProgress('pads');
});

function toggleDetails(element) {
    const details = element.querySelector('.details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        setTimeout(() => details.style.opacity = '1', 10); // Delay to ensure the display change is registered
        element.style.maxHeight = element.scrollHeight + 'px';
    } else {
        details.style.opacity = '0';
        setTimeout(() => {
            details.style.display = 'none';
            element.style.maxHeight = '300px';
        }, 300); // Delay matches the transition duration for opacity
    }
}

document.getElementById('themeSwitcher').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

const feedbackForm = document.getElementById('feedbackForm');
const feedbackEntries = document.getElementById('feedbackEntries');

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const recommendation = document.getElementById('recommendation').value;
    const Feedback = document.getElementById('Feedback').value;

    const feedbackItem = document.createElement('li');
    feedbackItem.innerHTML = `<strong>${name}</strong><br>(recommended ${recommendation})<br>${Feedback}`;

    feedbackEntries.appendChild(feedbackItem);

    feedbackForm.reset();
});

document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const theme = document.getElementById('theme').value;
    const emotion = document.getElementById('emotion').value;

    const affirmations = {
        motivation: {
            happy: "A person who is not disturbed by the incessant flow of desires—that enter like rivers into the ocean, which is ever being filled but is always still—can alone achieve peace, and not the person who strives to satisfy such desires.",
            sad: "One who performs their duty without attachment, surrendering the results unto the Supreme, is not affected by sinful action, as the lotus leaf is untouched by water.",
            anxious: "Let your thoughts and actions be filled with love, and you will find the divine in every moment.",
            tired: "The soul is never born and never dies; it is eternal and unchanging."
        },
        calm: {
            happy: "Krishna Says~ I am the ultimate refuge for all beings. Surrender to Me wholeheartedly, and I shall bestow my grace upon you.",
            sad: "Krishna Says~ The mind is restless and turbulent, but it can be controlled through regular practice and dispassion.",
            anxious: "Practice self-control and renunciation without any desire for the fruits of your actions. This is true wisdom.",
            tired: " Krishna Says~ Find peace in the quiet moments."
        },
        'self-love': {
            happy: "You are enough just as you are.",
            sad: "Love yourself unconditionally.",
            anxious: "You are worthy of love and respect.",
            tired: "Take time to nourish your soul."
        },
        gratitude: {
            happy: "Krishna Says~ I am the soul in the heart of all creatures. I am the beginning, the middle, and the end of all beings.",
            sad: "Those who worship Krishna with unwavering faith and love are always in Krishna embrace, and he is always with them.",
            anxious: "Gratitude is the best attitude.",
            tired: "A grateful heart is a magnet for miracles."
        }
    };

    const images = {
        motivation: 'https://wallpapercave.com/wp/wp6505352.jpg',
        calm: 'http://quotlr.com/images/quotes/calm-is-a-super-power.jpg',
        'self-love': 'https://www.earthraga.com/cdn/shop/articles/Why_You_Should_Use_Products_With_Salicylic_Acid_For_Radiant_Skin_3.jpg?v=1702235741',
        gratitude: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpsychology.net.in%2Fgratitude-an-experience-and-intervention%2F&psig=AOvVaw1CUj9POxlvf42V80iQMs9J&ust=1719672285295000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCJi0iNHE_oYDFQAAAAAdAAAAABAE'
    };

    const affirmation = affirmations[theme][emotion];
    const imageSrc = images[theme];

    document.getElementById('affirmationText').innerText = affirmation;
    document.getElementById('affirmationImage').src = imageSrc;
    document.getElementById('affirmationResult').classList.remove('hidden');
    document.getElementById('affirmationImage').classList.remove('hidden');
});

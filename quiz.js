document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quizForm');
    const resultContainer = document.getElementById('resultContainer');
    const feedbackSection = document.getElementById('feedbackSection');
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackText = document.getElementById('feedbackText');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Object to store symptoms and their scoring criteria
        const symptoms = {
            q1: { yes: 5, no: 0 },
            q2: { yes: 3, no: 0 },
            q3: { yes: 4, no: 0 },
            q4: { yes: 3, no: 0 },
            q5: { yes: 2, no: 0 },
            q6: { yes: 2, no: 0 },
            q7: { yes: 4, no: 0 },
            q8: { yes: 2, no: 0 },
            q9: { yes: 3, no: 0 },
            q10: { yes: 2, no: 0 },
            q11: { yes: 3, no: 0 },
            q12: { yes: 2, no: 0 },
            q13: { yes: 4, no: 0 },
            q14: { yes: 2, no: 0 },
            q15: { yes: 3, no: 0 },
            q16: { yes: 2, no: 0 },
            q17: { yes: 2, no: 0 },
            q18: { yes: 3, no: 0 },
            q19: { yes: 2, no: 0 },
            q20: { yes: 2, no: 0 },
            q21: { yes: 2, no: 0 },
            q22: { yes: 2, no: 0 },
            q23: { yes: 3, no: 0 },
            q24: { yes: 2, no: 0 },
            q25: { yes: 2, no: 0 },
            q26: { yes: 3, no: 0 },
            q27: { yes: 2, no: 0 },
            q28: { yes: 2, no: 0 },
            q29: { yes: 2, no: 0 },
            q30: { yes: 3, no: 0 },
        };

        // Calculate score based on user answers
        let score = 0;
        for (let i = 1; i <= 30; i++) {
            const answer = form.elements['q' + i];
            if (answer) {
                const value = answer.value;
                if (value === 'yes') {
                    score += symptoms['q' + i].yes;
                } else if (value === 'no') {
                    score += symptoms['q' + i].no;
                }
            }
        }

        // Determine result message based on score
        let resultMessage = '';
        if (score <= 30) {
            resultMessage = "Based on your answers, you are less likely to have PCOD/PCOS. However, it's essential to consult a healthcare professional for a thorough evaluation.";
        } else if (score <= 60) {
            resultMessage = "Based on your answers, you may have mild symptoms of PCOD/PCOS. It's recommended to consult a healthcare professional for further evaluation.";
        } else if (score <= 90) {
            resultMessage = "Based on your answers, you may have moderate symptoms of PCOD/PCOS. It's crucial to consult a healthcare professional for proper diagnosis and management.";
        } else {
            resultMessage = "Based on your answers, you may have significant symptoms of PCOD/PCOS. It's urgent to consult a healthcare professional for diagnosis and management.";
        }

        // Display result message
        resultContainer.textContent = resultMessage;
        feedbackSection.style.display = 'block';
    });

    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const feedback = feedbackText.value.trim();
        if (feedback) {
            alert('Thank you for your feedback!');
            feedbackText.value = '';
        } else {
            alert('Please enter your feedback.');
        }
    });
});

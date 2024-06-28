document.getElementById('period-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const cycleLength = document.getElementById('cycle-length').value;

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            start_date: startDate,
            end_date: endDate,
            cycle_length: cycleLength
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('result').innerText = `The predicted next period date is: ${data.next_period}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again.';
    });
});

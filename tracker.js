// Function to record the period details
function recordPeriod() {
    // Retrieve inputs
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    const cycleLength = parseInt(document.getElementById("cycleLength").value);

    // Validate inputs
    if (!isValidDate(startDate) || !isValidDate(endDate) || isNaN(cycleLength) || cycleLength <= 0) {
        alert("Please enter valid dates and cycle length.");
        return;
    }

    // Calculate period length
    const periodLength = calculatePeriodLength(startDate, endDate);

    // Store data in localStorage
    const periodData = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        cycleLength: cycleLength,
        periodLength: periodLength
    };

    localStorage.setItem("periodData", JSON.stringify(periodData));

    // Predict next period
    predictNextPeriod(startDate, cycleLength);

    // Display results
    displayResults(startDate, cycleLength, periodLength);
}

// Function to calculate period length
function calculatePeriodLength(startDate, endDate) {
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1; // Adding 1 to include both start and end days
}

// Function to predict the next period date
function predictNextPeriod(startDate, cycleLength) {
    const nextPeriodDate = new Date(startDate);
    nextPeriodDate.setDate(startDate.getDate() + cycleLength);
    displayNextPeriod(nextPeriodDate);
}

// Function to display the predicted next period date
function displayNextPeriod(nextPeriodDate) {
    const nextPeriodDateElement = document.getElementById("nextPeriodDate");
    nextPeriodDateElement.textContent = formatDate(nextPeriodDate);

    const resultsDiv = document.getElementById("results");
    resultsDiv.style.display = "block";
}

// Function to format date as DD/MM/YYYY
function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Function to check if date is valid
function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

function login() {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const email = document.getElementById('email').value;

	if (!username || !password || !email) {
		document.getElementById('loginMessage').textContent =
			'Please fill in complete information';
		return;
	}

	// Retrieve user data from localStorage
	const users = JSON.parse(localStorage.getItem('users')) || [];

	// Check if user exists
	const user = users.find(
		u => u.username === username && u.password === password
	);
	if (user) {
		// Login successful
		document.getElementById('loginMessage').textContent =
			'Login successful';

		// Send email notification
		const templateParams = {
			username: username,
			email: email,
			message:
				'Welcome to Period Wellness! You will receive notifications about your upcoming periods and health tips.'
		};

		emailjs
			.send('service_6n9y5cj', 'template_lxgklg6', templateParams)
			.then(
				response => {
					console.log(
						'Email sent successfully!',
						response.status,
						response.text
					);
				},
				error => {
					console.error('Failed to send email.', error);
				}
			);
	} else {
		// Login failed
		document.getElementById('loginMessage').textContent =
			'Invalid username or password';
	}
}

function signup() {
	const newUsername = document.getElementById('newUsername').value;
	const newPassword = document.getElementById('newPassword').value;

	if (!newUsername || !newPassword) {
		document.getElementById('signupMessage').textContent =
			'Please fill in complete information';
		return;
	}

	// Retrieve user data from localStorage
	const users = JSON.parse(localStorage.getItem('users')) || [];

	// Check if username already exists
	const userExists = users.some(u => u.username === newUsername);
	if (userExists) {
		// Username already exists
		document.getElementById('signupMessage').textContent =
			'Username already exists';
	} else {
		// Create new user object
		const newUser = {
			username: newUsername,
			password: newPassword
		};

		// Add new user to array
		users.push(newUser);

		// Save updated user data back to localStorage
		localStorage.setItem('users', JSON.stringify(users));

		// Display success message
		document.getElementById('signupMessage').textContent =
			User `${newUsername} signed up successfully`;
	}
}

function toggleForm() {
	var loginSection = document.getElementById('loginSection');
	var signupSection = document.getElementById('signupSection');

	if (loginSection.style.display === 'none') {
		loginSection.style.display = 'block';
		signupSection.style.display = 'none';
	} else {
		loginSection.style.display = 'none';
		signupSection.style.display = 'block';
	}
}

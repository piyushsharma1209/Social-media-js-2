// Select the login form and input fields
const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Add an event listener to the login form
loginForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the email and password values from the input fields
    const email = emailInput.value;
    const password = passwordInput.value;

    // Send a POST request to the API with the email and password
    fetch('https://api.noroff.dev/api/v1/social/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            // Handle the API response
            if (data.success) {
                // If the login was successful, redirect the user to the home page
                window.location.href = '/';
            } else {
                // If the login was unsuccessful, display an error message
                const errorMessage = document.querySelector('#error-message');
                errorMessage.innerHTML = data.message;
            }
        })
        .catch((error) => {
            // Handle any errors that occurred during the request
            console.error(error);
        });
});

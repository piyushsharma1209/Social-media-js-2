// Set API endpoint URL
const url = 'https://api.noroff.dev/api/v1/social/auth/register';

// Get form elements
const form = document.querySelector('.registration-form');
const nameInput = document.querySelector('#registration-name');
const emailInput = document.querySelector('#registration-email');
const passwordInput = document.querySelector('#registration-password');

// Add event listener to form
form.addEventListener('submit', event => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get form data
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Set POST data
    const data = {
        name,
        email,
        password
    };

    // Encode data as JSON
    const dataString = JSON.stringify(data);

    // Set fetch options
    const options = {
        method: 'POST',
        body: dataString,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': dataString.length
        }
    };

    // Send POST request to API
    fetch(url, options)
        .then(response => response.json())
        .then(result => {
            // Check for success
            if (result.success) {
                // Registration was successful
                // Add code here to update the HTML to reflect the successful registration
            } else {
                // Registration failed
                // Add code here to display an error message or handle the failure
            }
        })
        .catch(error => {
            // Handle error
        });
});
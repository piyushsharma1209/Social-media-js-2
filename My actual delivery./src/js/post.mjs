// Select the post form and input field
const postForm = document.querySelector('#post-form');
const postInput = document.querySelector('#post');

// Add an event listener to the post form
postForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the post value from the input field
    const post = postInput.value;

    // Send a POST request to the API with the post
    fetch('https://api.noroff.dev/api/v1/social/auth/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add the authorization header with the user's access token
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            post,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            // Handle the API response
            if (data.success) {
                // If the post was successful, clear the input field and display a success message
                postInput.value = '';
                const successMessage = document.querySelector('#success-message');
                successMessage.innerHTML = 'Post added successfully!';
            } else {
                // If the post was unsuccessful, display an error message
                const errorMessage = document.querySelector('#error-message');
                errorMessage.innerHTML = data.message;
            }
        })
        .catch((error) => {
            // Handle any errors that occurred during the request
            console.error(error);
        });
});

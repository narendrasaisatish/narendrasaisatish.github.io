// Example JavaScript for the contact form

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert('Form submitted successfully!');
        // You can add AJAX here to send form data to your server if needed
    } else {
        alert('Please fill out all fields.');
    }
});

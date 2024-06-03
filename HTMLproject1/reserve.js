document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let guests = document.getElementById('guests').value;

    // Simple validation (you can add more complex validation if needed)
    if (name || email || date || time || guests) {
        // Display a confirmation message
        document.getElementById('reservationResult').textContent = 'Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been reserved. A confirmation email has been sent to ${email}.';
    } else {
        // Display an error message
        document.getElementById('reservationResult').textContent = 'Please fill out all fields.';
    }
});

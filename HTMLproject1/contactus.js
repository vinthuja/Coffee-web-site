document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let Textarea = document.getElementById('textarea').value;
    if (name || email || Textarea) {
        document.getElementById('submitResult').textContent = 'Thank you', 'your are name ${name}',' your are email $(email) and your are text ${Textarea}.';

    }
    else {
        // Display an error message
        document.getElementById('submitResult').textContent = 'Please fill out all fields.';
    }
});
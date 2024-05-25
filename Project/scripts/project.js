document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));

            contactForm.reset();

            alert('Your message has been sent!');
        });
    }
});

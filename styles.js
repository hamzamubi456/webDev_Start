document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});

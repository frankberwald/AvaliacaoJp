document.addEventListener('DOMContentLoaded', () =>  {
    const formDataArray = [];

    const form = document.querySelector('.form-group');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        const formData = {
            name,
            email,
            message
        };

        formDataArray.push(formData);

        console.log(formDataArray);

        form.reset();
        
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;


    clearErrors();
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        showError('nameError', 'Имя обязательно для заполнения.');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    if (email === '') {
        showError('emailError', 'Email обязателен для заполнения.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Введите корректный адрес Email.');
        isValid = false;
    }

    const message = document.getElementById('message').value.trim();
    if (message === '') {
        showError('messageError', 'Сообщение обязательно для заполнения.');
        isValid = false;
    }

    if (isValid) {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
    
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Ваше сообщение отправлено!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Произошла ошибка при отправке сообщения.');
        });
    }
});


function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}


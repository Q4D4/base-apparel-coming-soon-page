// References
const form = document.querySelector('.form');
const input = form.querySelector('.form__input');
// Constants
const errorClass = 'form_error';

form.addEventListener('submit', function (event) {
	event.preventDefault();
	const value = input.value;
	if (validateEmail(value)) {
		alert('Thank You!');
	} else {
		if (!form.classList.contains(errorClass)) {
			form.classList.add(errorClass);
		}
	}
});

input.addEventListener('keypress', function () {
	if (form.classList.contains(errorClass)) {
		form.classList.remove(errorClass);
	}
});

// Email validator using regular expression
const validateEmail = function (email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

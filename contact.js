class contactForm {
    _errorMessage = document.querySelector('.error-message');
    _successMessage = document.querySelector('.success-message');
    constructor() {
        this._handleContactForm();
    }

    _clearMessage(messageElement) {
        setTimeout(() => {
            messageElement.textContent = "";
        }, 3000);
    }


    _displayErrorMessage(error = '') {

        this._successMessage.textContent = '';
        this._errorMessage.textContent = error;


        this._clearMessage(this._errorMessage);

    }

    _displaySuccessMessage(success = '') {

        this._errorMessage.textContent = '';
        this._successMessage.textContent = success;

        this._clearMessage(this._successMessage);

    }

    _clearForm(form) {
        form.reset();
    }

    _handleContactForm() {
        const contactForm = document.querySelector('.contact-form');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const email = formData.get('email');
            const message = formData.get('message');

            if (message.length < 10) {
                this._displayErrorMessage('❌ Message must be at least 10 characters');

                return;
            }

            if (email.includes('@') && email.includes('.com')) {
                this._displaySuccessMessage('✅ Submission Successful');

                this._clearForm(contactForm);
            } else {
                this._displayErrorMessage('❌ Incorrect, email must include @ and .com');
            }
        });
    }
}

new contactForm();

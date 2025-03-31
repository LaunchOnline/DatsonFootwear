// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Validate form data
        if (!validateForm(formData)) {
            return;
        }

        // Show success message
        showSuccessMessage();

        // Reset form
        contactForm.reset();
    });
});

// Form validation
function validateForm(data) {
    // Name validation
    if (data.name.trim().length < 2) {
        showError('name', 'Please enter a valid name');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showError('email', 'Please enter a valid email address');
        return false;
    }

    // Phone validation (if provided)
    if (data.phone) {
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(data.phone)) {
            showError('phone', 'Please enter a valid phone number');
            return false;
        }
    }

    // Message validation
    if (data.message.trim().length < 10) {
        showError('message', 'Please enter a message with at least 10 characters');
        return false;
    }

    return true;
}

// Show error message
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    
    field.classList.add('is-invalid');
    field.parentNode.appendChild(errorDiv);
    
    // Remove error message after 3 seconds
    setTimeout(() => {
        field.classList.remove('is-invalid');
        errorDiv.remove();
    }, 3000);
}

// Show success message
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success alert-dismissible fade show';
    successDiv.innerHTML = `
        Thank you for your message! We will get back to you soon.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successDiv, form);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
} 
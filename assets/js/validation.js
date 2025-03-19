document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("openFormBtn");
    const closeBtn = document.querySelector(".close");

    // فتح النافذة عند الضغط على الزر
    openBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // إغلاق النافذة عند الضغط على زر الإغلاق
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // إغلاق النافذة عند الضغط خارجها
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});



// Request for Quotation for Companies and Wholesalers


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("openFormBtn");
    const closeBtn = document.querySelector(".close");

    // فتح النافذة عند الضغط على الزر
    openBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // إغلاق النافذة عند الضغط على زر الإغلاق
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // إغلاق النافذة عند الضغط خارجها
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});






// Validation functions
function validateInputLength(value, minLength) {
    return value.length >= minLength;
}

function validateNoNumbers(value) {
    return !/\d/.test(value);
}

// Main validation for the contact form
function validateContactForm() {
    let isValid = true;

    // Get form elements
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Validate First Name
    if (!validateInputLength(firstName.value, 3) || !validateNoNumbers(firstName.value)) {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
    }

    // Validate Last Name
    if (!validateInputLength(lastName.value, 3) || !validateNoNumbers(lastName.value)) {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
    }

    // Validate Email
    if (!email.value) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').textContent = 'Invalid email format. Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validate Phone Number
    if (!phoneNumber.value) {
        document.getElementById('phoneNumberError').style.display = 'block';
        document.getElementById('phoneNumberError').textContent = 'Phone number is required.';
        isValid = false;
    } else if (!/^[0-9]{10,15}$/.test(phoneNumber.value)) {
        document.getElementById('phoneNumberError').style.display = 'block';
        document.getElementById('phoneNumberError').textContent = 'Invalid phone number. It must be 10-15 digits.';
        isValid = false;
    } else {
        document.getElementById('phoneNumberError').style.display = 'none';
    }

    // Validate Subject
    if (!subject.value) {
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('subjectError').style.display = 'none';
    }

    // Validate Message
    if (!message.value) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }
    return isValid;
}

// Function to send data using EmailJS
function sendMail() {
    // Initialize EmailJS
    emailjs.init("3gUIxBk1fE5bV8sNQ"); // Replace "YOUR_PUBLIC_KEY" with your actual EmailJS public key

    const params = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    const serviceID = "service_k0a6oqv"; // Replace "YOUR_SERVICE_ID" with your actual service ID
    const templateID = "template_yge24ol"; // Replace "YOUR_TEMPLATE_ID" with your actual template ID

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Message sent successfully!");
            document.getElementById('contactFormContact').reset();
        })
        .catch(err => {
            console.error("Error:", err);
            alert("An error occurred while sending the message.");
        });
}

// Add event listener to the form
const contactForm = document.getElementById('contactFormContact');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    if (validateContactForm()) {
        sendMail();
    } else {
        alert('Please fix the errors in the form before submitting.');
    }
});
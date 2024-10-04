document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-linkss');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Remove active class from all content sections and links
            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('active');
            });
            navLinks.forEach(link => {
                link.classList.remove('active-linkss');
            });

            // Add active class to the clicked link and corresponding content section
            const targetId = this.getAttribute('data-target'); // Get the target content ID
            document.getElementById(targetId).classList.add('active'); // Show the target content
            this.classList.add('active-link'); // Highlight the clicked link
        });
    });
});










// الشروط والاحكام


document.addEventListener('DOMContentLoaded', function () {
    // الحصول على العناصر
    let showBtns = document.querySelectorAll('.showConditionsBtn');
    let conditionsDiv = document.getElementById('conditionsDiv');
    let closeBtn = document.getElementById('closeConditions');
    let acceptBtn = document.getElementById('acceptConditionsBtn');
    let consultationsDiv = document.getElementById('consultations');
    let consultationscon = document.getElementById('consultationscon');
    let consult = document.getElementById('consult');
    let icons = document.getElementById('icons');
    let contactdet = document.getElementById('contactdet');
    let footer = document.getElementById('footer');
    let nav = document.getElementById('nav');
    let space = document.querySelector('.consultForms');
    let bGround = document.querySelector('.formssss');

    // إظهار الشروط والأحكام عند الضغط على الزرار
    showBtns.forEach(function(showBtn) {
        showBtn.addEventListener('click', function () {
            // تنفيذ العمليات المطلوبة عند النقر على الزر
            let conditionsDiv = document.querySelector('#conditionsDiv');
            if (conditionsDiv) {
                conditionsDiv.style.display = 'flex';
            } else {
                console.error('Element with id conditionsDiv not found.');
            }
        });
    });

    // إخفاء الشروط والأحكام عند الضغط على أيقونة الإغلاق
    closeBtn.addEventListener('click', function () {
        conditionsDiv.style.display = 'none';
    });

    // إظهار الـ div الخاص بالاستشارات عند الضغط على زر الموافقة
    acceptBtn.addEventListener('click', function () {
        consult.style.display = 'none';
        icons.style.display = 'none';
        contactdet.style.display = 'none';
        consultationscon.style.display = 'none';
        footer.style.display = 'none';
        conditionsDiv.style.display = 'none';
        nav.style.display = 'none';
        space.style.padding ='0';
        bGround.style.backgroundColor = '#494746';
        consultationsDiv.style.display = 'block';
    });
});




































// Helper function to validate input length and content
function validateInputLength(value, minLength) {
    return value.length >= minLength;
}

function validateNoNumbers(value) {
    return !/\d/.test(value);
}

// Validation for Contact Form
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
    if (!email.value || !email.validity.valid) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validate Phone Number
    if (!phoneNumber.value) {
        document.getElementById('phoneNumberError').style.display = 'block';
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

// Function to send data to Google Sheets
function sendDataToGoogleSheetsss(formData, Contact) {
    const scriptURL1 = `https://script.google.com/macros/s/AKfycbwWVi6UeHZnlZw9y4fmTuswtUG1gtJfcdp2ovajm7JWyVOpP1JMG5istdQ9gQGXy30b_w/exec`;

    fetch(scriptURL1, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Data submitted successfully!');
            window.location.reload();
        } else {
            alert('Failed to submit data.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

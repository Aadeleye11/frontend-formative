/*===============  Contact Form ===============*/
emailjs.init("NbfNYX6FA3XSJ_Pzj"); // Initialize EmailJS with your Public Key

const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact__name'),
  contactEmail = document.getElementById('contact__email'),
  Message = document.querySelector('textarea[name="message"]'),
  contactMessage = document.getElementById('contact__message');

const sendEmail = (e) => {
  e.preventDefault();

  // Check if all fields are filled
  if (
    contactName.value.trim() === '' ||
    contactEmail.value.trim() === '' ||
    Message.value.trim() === ''
  ) {
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');
    contactMessage.textContent = 'Please fill in all the fields.';
    return;
  }

  // Send the form using EmailJS
  emailjs.sendForm(
    'service_49y27bu',     // Your EmailJS Service ID
    'template_gjxcguh',    // Your EmailJS Template ID
    '#contact-form',       // Form selector
    'NbfNYX6FA3XSJ_Pzj'    // Your Public Key
  )
  .then(() => {
    contactMessage.classList.remove('color-dark');
    contactMessage.classList.add('color-light');
    contactMessage.textContent = 'Message sent successfully ✅';

    // Clear fields
    contactForm.reset();

    // Clear message after 5 seconds
    setTimeout(() => {
      contactMessage.textContent = '';
    }, 5000);
  })
  .catch((error) => {
    console.error('EmailJS Error:', error);
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');
    contactMessage.textContent = 'Oops! Something went wrong ❌';
  });
};

// Add submit event listener
contactForm.addEventListener('submit', sendEmail);

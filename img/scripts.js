// document.getElementById('register-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;
//     const passwordStrength = document.getElementById('password-strength');
//     const passwordMatch = document.getElementById('password-match');

//     // Check password strength
//     if (password.length < 8) {
//         passwordStrength.textContent = 'Password is too short';
//         passwordStrength.style.color = 'red';
//     } else if (!/\d/.test(password)) {
//         passwordStrength.textContent = 'Password must contain at least one number';
//         passwordStrength.style.color = 'red';
//     } else if (!/[A-Z]/.test(password)) {
//         passwordStrength.textContent = 'Password must contain at least one uppercase letter';
//         passwordStrength.style.color = 'red';
//     } else {
//         passwordStrength.textContent = 'Password is strong';
//         passwordStrength.style.color = 'green';
//     }

//     // Check if passwords match
//     if (password !== confirmPassword) {
//         passwordMatch.textContent = 'Passwords do not match';
//         passwordMatch.style.color = 'red';
//     } else {
//         passwordMatch.textContent = 'Passwords match';
//         passwordMatch.style.color = 'green';
//     }

//     // If all checks pass, submit the form
//     if (password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password) && password === confirmPassword) {
//         // Form submission logic here
//         alert('Form submitted successfully!');
//     }
// });

// function socialLogin(platform) {
//     alert('Logging in with ' + platform);
// }


// const form = document.querySelector('.registration-form');
// const icons = document.querySelectorAll('.input-icon i');

// function animateIcons() {
//   icons.forEach(icon => {
//     icon.classList.toggle('moving'); // Toggle the moving class
//   });
// }

// form.addEventListener('submit', animateIcons);  // Trigger animation on submit


// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
//     animateIcons();
//     // Add a short delay for animation visibility
//     setTimeout(function() {
//       form.submit(); // Submit the form after the delay
//     }, 200);
//   });
  

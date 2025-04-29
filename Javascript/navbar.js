document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('navbar');
  const navLinks = document.querySelectorAll('.navbar-links a');
  const logo = document.querySelector('.navbar-logo img'); // Assuming your logo is an <img> tag

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      navbar.style.backgroundColor = 'white';
      navLinks.forEach(link => {
        link.style.color = 'black';
      });
      logo.src = '../img/GojekLogo.png';
    } else {
      navbar.style.backgroundColor = 'transparent';
      navLinks.forEach(link => {
        link.style.color = 'white';
      });
      logo.src = '../img/GojekLogo-white.png';
    }
  });
});
// script.js
// Scroll to top functionality
const scrollTopButton = document.getElementById('scroll-top-button');

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

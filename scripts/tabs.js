document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active classes
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active to clicked tab and corresponding content
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});
function scrollToSection() {
  document.querySelector('#details').scrollIntoView({
    behavior: 'smooth'
  });
}


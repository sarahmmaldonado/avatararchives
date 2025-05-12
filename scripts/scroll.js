// Function to smoothly scroll to the Details section
function scrollToSection() {
    const detailsSection = document.getElementById('details');
    detailsSection.scrollIntoView({
      behavior: 'smooth',  // Enables smooth scrolling
      block: 'start'       // Scrolls to the top of the section
    });
  }
  
  // Function to smoothly scroll to the More About Avatar section
  function scrollToMoreAbout() {
    const moreAboutSection = document.getElementById('more-about');
    moreAboutSection.scrollIntoView({
      behavior: 'smooth',  // Enables smooth scrolling
      block: 'start'       // Scrolls to the top of the section
    });
  }
  
  
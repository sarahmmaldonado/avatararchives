document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove("active"));
      // Show the clicked tab content
      const activeTab = document.getElementById(button.getAttribute("data-tab"));
      activeTab.classList.add("active");
    });
  });
});

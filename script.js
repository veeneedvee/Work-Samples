// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Switch to Light Mode";
    } else {
      toggleButton.textContent = "Switch to Dark Mode";
    }
  });
});
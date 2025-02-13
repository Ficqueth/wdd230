document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("meet-greet-banner");
    const closeButton = document.getElementById("close-banner");

    // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date().getDay();

    // Show banner only on Monday (1), Tuesday (2), and Wednesday (3)
    if (today >= 1 && today <= 3) {
        banner.style.display = "block";
    }

    // Close button functionality
    closeButton.addEventListener("click", function () {
        banner.style.display = "none";
    });
});

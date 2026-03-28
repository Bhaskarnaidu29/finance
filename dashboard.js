// Wait for the HTML document to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Load the username into the dashboard
    let currentUser = localStorage.getItem('bhaskar_current_user');
    let userDisplay = document.getElementById('username-display');
    
    // If the username exists, show it, otherwise show 'Guest'
    if (currentUser && userDisplay) {
        // Capitalize the first letter for display
        userDisplay.innerText = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
    } else if (userDisplay) {
        userDisplay.innerText = 'Guest';
    }

    // 2. Setup Navigation Logic to Switch Sections
    let navLinks = document.querySelectorAll('.nav-links a');
    let contentSections = document.querySelectorAll('.content-section');

    // Add a click event to every navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Find which section to show from data-target
            let targetId = link.getAttribute('data-target');

            // Hide all sections first
            contentSections.forEach(function(section) {
                section.classList.remove('active');
            });

            // Remove 'active' styling from all links
            navLinks.forEach(function(nav) {
                nav.classList.remove('active');
            });

            // Show the clicked section
            let targetSection = document.getElementById('section-' + targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Highlight the clicked navigation link
            link.classList.add('active');
        });
    });

    // 3. Setup Logout Logic
    let logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Clear the current user from memory so they stay logged out
            localStorage.removeItem('bhaskar_current_user');
            
            // Redirect the browser to the login page
            window.location.href = 'index.html';
        });
    }

});

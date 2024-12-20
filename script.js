const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.navbar .links a' ); 
let hideNavbarFlag = false; 


links.forEach(link => {
    link.addEventListener('click', function() {
        hideNavbarFlag = true; // Set the flag to true when a link is clicked
        navbar.classList.remove('show'); // Hide the navbar
        setTimeout(() => hideNavbarFlag = false, 1000); // Reset flag after a short delay
    });
});

// Show/hide navbar on scroll, but respect the hide flag
window.addEventListener('scroll', function() {
    if (!hideNavbarFlag) { // Check if the flag is set to prevent automatic show
        if (window.scrollY > 100) {
            navbar.classList.add('show');
        } else {
            navbar.classList.remove('show');
        }
    }
});


const responsiveMenuButton = document.getElementById('responsiveMenuButton');
const navBarLinks = document.querySelector('.navbar-links');

    responsiveMenuButton.addEventListener('click', () => {
        navBarLinks.classList.toggle('open');
        responsiveMenuButton.classList.toggle('open');  
    });

    const allNavLinks = document.querySelectorAll('.navbar-links');
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                navBarLinks.classList.remove('open');
                responsiveMenuButton.classList.remove('open');
                hideNavbarFlag = false; 
                
            })
        });
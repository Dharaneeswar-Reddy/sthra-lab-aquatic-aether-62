// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Read More functionality for Principal Investigator
    const readMoreBtn = document.getElementById('readMoreBtn');
    const shortBio = document.getElementById('shortBio');
    const fullBio = document.getElementById('fullBio');
    
    if (readMoreBtn && shortBio && fullBio) {
        readMoreBtn.addEventListener('click', function() {
            // Toggle visibility of full bio
            fullBio.classList.toggle('hidden');
            
            // Update button text and icon
            if (fullBio.classList.contains('hidden')) {
                readMoreBtn.innerHTML = 'Read More <span class="chevron-down">&#9662;</span>';
            } else {
                readMoreBtn.innerHTML = 'Read Less <span class="chevron-up">&#9652;</span>';
            }
        });
    }
    
    // Scroll animation for page elements
    function animateOnScroll() {
        const elements = document.querySelectorAll('.academic-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-slide-up');
            }
        });
    }
    
    // Initial check on page load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Mobile navigation menu toggle (simplified version)
    // You'll need to enhance this for a proper mobile menu
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    mobileMenuButton.style.display = 'none';
    
    // Add to DOM only in mobile view
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleScreenChange(e) {
        if (e.matches) {
            // Mobile view
            document.querySelector('.nav-content').prepend(mobileMenuButton);
            mobileMenuButton.style.display = 'block';
        } else {
            // Desktop view
            if (document.contains(mobileMenuButton)) {
                mobileMenuButton.style.display = 'none';
            }
        }
    }
    
    // Initial check
    handleScreenChange(mediaQuery);
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleScreenChange);
});
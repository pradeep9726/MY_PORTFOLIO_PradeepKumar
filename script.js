// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get navigation buttons
    const aboutBtn = document.querySelector('header a:nth-child(2) button');
    const skillsBtn = document.querySelector('header a:nth-child(3) button');
    const projectsBtn = document.querySelector('header a:nth-child(4) button');
    const contactBtn = document.querySelector('header a:nth-child(5) button');
    const topBtn = document.querySelector('.fixedbutton');
    
    // Get sections
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');
    const header = document.querySelector('header');
    
    // Smooth scroll function
    function smoothScroll(target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Navigation event listeners
    aboutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(aboutSection);
    });
    
    skillsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(skillsSection);
    });
    
    projectsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(projectsSection);
    });
    
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(contactSection);
    });
    
    // Top button functionality
    topBtn.addEventListener('click', function() {
        smoothScroll(header);
    });
    
    // Form handling
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');
    const codingCheckbox = document.getElementById('coding');
    const readingCheckbox = document.getElementById('reading');
    const bioInput = document.querySelector('input[type="text"]:last-of-type');
    
    // Form validation and submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        if (!nameInput.value.trim()) {
            alert('Please enter your name');
            nameInput.focus();
            return;
        }
        
        if (!emailInput.value.trim()) {
            alert('Please enter your email');
            emailInput.focus();
            return;
        }
        
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }
        
        // Collect form data
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            gender: maleRadio.checked ? 'male' : (femaleRadio.checked ? 'female' : 'not specified'),
            interests: [],
            bio: bioInput.value
        };
        
        if (codingCheckbox.checked) formData.interests.push('coding');
        if (readingCheckbox.checked) formData.interests.push('reading');
        
        // Success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        form.reset();
    });
    
    // Active section highlighting
    function highlightActiveSection() {
        const sections = [aboutSection, skillsSection, projectsSection, contactSection];
        const buttons = [aboutBtn, skillsBtn, projectsBtn, contactBtn];
        
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                buttons.forEach(btn => btn.classList.remove('active'));
                buttons[index].classList.add('active');
            }
        });
    }
    
    // Scroll event listener for active section highlighting
    window.addEventListener('scroll', highlightActiveSection);
    
    // Show/hide top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });
    
    // Initially hide top button
    topBtn.style.display = 'none';
});
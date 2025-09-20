document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.querySelector('header a:nth-child(2) button');
    const skillsBtn = document.querySelector('header a:nth-child(3) button');
    const projectsBtn = document.querySelector('header a:nth-child(4) button');
    const contactBtn = document.querySelector('header a:nth-child(5) button');
    const topBtn = document.querySelector('.fixedbutton');
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');
    const header = document.querySelector('header');
    function smoothScroll(target) {
        const yOffset = -20; 
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
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
    topBtn.addEventListener('click', function() {
        smoothScroll(header);
    });
    function highlightActiveSection() {
        const sections = [aboutSection, skillsSection, projectsSection, contactSection];
        const buttons = [aboutBtn, skillsBtn, projectsBtn, contactBtn];

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
                buttons.forEach(btn => btn.classList.remove('active'));
                buttons[index].classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', highlightActiveSection);
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });
    topBtn.style.display = 'none';
});

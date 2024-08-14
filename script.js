// Log a message when the website loads
console.log("Welcome to Rohit Kumar's Portfolio Website!");

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle the visibility of sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    const header = document.createElement('h3');
    header.textContent = section.querySelector('h2').textContent + ' (Click to toggle)';
    header.style.cursor = 'pointer';
    header.style.color = '#007acc';
    section.insertBefore(header, section.firstChild);
    section.querySelector('h2').style.display = 'none';

    header.addEventListener('click', () => {
        const content = section.querySelectorAll('p, ul');
        content.forEach(item => {
            item.style.display = item.style.display === 'none' ? 'block' : 'none';
        });
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 20px';
backToTopButton.style.backgroundColor = '#007acc';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Contact form validation
const emailInput = document.querySelector('input[type="email"]');
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (e) => {
    const emailValue = emailInput.value;
    if (!emailValue.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Display current year in the footer
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Rohit Kumar. All Rights Reserved.`;

// Animate section appearance on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
});

sections.forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

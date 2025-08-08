// Function to change portfolio section background color
function changePortfolioBg(color) {
    document.querySelector('.portfolio').style.backgroundColor = color;
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    
    // Show alert
    alert(`Thank you ${name}! Your message has been received. I'll get back to you soon.`);
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Add event listener to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Add event listeners to project titles
document.querySelectorAll('.portfolio-title').forEach(title => {
    title.addEventListener('click', function() {
        // Generate a random soft pastel color
        const hue = Math.floor(Math.random() * 360);
        const pastelColor = `hsl(${hue}, 60%, 90%)`;
        changePortfolioBg(pastelColor);
    });
});

// Add animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.portfolio-item, .contact-form').forEach(el => {
    observer.observe(el);
});
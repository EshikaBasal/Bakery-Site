// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    if (name.value === "" || email.value === "" || message.value === ""){
        alert("All fields are required!");
    } else{
        alert("Thank you for contacting us!");
        name.value = "";
        email.value = "";
        message.value = "";
    } 
});

// Back-to-Top Button
const topButton = document.createElement('button');
topButton.innerText = "↑";
topButton.classlist.add('top-button');
document.body.appendChild(topButton);

topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    if(window.screenY > 300) {
        topButton.style.display = 'block';
    }
    else{
        topButton.style.display = 'none';
    }
});

// Fade-in Effect on Scroll
const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100){
            section.classList.add('fade.in');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);


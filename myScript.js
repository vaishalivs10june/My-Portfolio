const skills = document.querySelectorAll('.skill, .pro');

function checkVisibility() {
  skills.forEach(skill => {
    const bounding = skill.getBoundingClientRect();
    if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
      skill.classList.add('visible');
    } else {
      skill.classList.remove('visible');
    }
  });
}

window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);

// animation for certificate
const certificateCards = document.querySelectorAll('.cer1, .cer2');

function checkInView() {
  certificateCards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const isInView = (cardRect.top >= 0 && cardRect.bottom <= window.innerHeight);
    if (isInView) {
      card.classList.add('animate');
    } else {
        card.classList.remove('animate');
      }
  });
}

window.addEventListener('scroll', checkInView);


// Add Font Awesome icons
const head = document.querySelector('head');
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://use.fontawesome.com/releases/v5.14.0/css/all.css';
head.appendChild(link);

// h1
const headings = document.querySelectorAll(".animate-underline");

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("underline-animated");
    } else {
        entry.target.classList.remove("underline-animated");
    }
  });
}

const observer = new IntersectionObserver(handleIntersect);
headings.forEach(heading => {
  observer.observe(heading);
});

function toggleTechnology() {
  const techDescription = document.getElementById('tech-description');
  techDescription.style.display = techDescription.style.display === 'none' ? 'block' : 'none';
}

function animateElement() {
  const interactiveDescription = document.getElementById('interactive-description');
  interactiveDescription.classList.add('animated');
  setTimeout(() => {
      interactiveDescription.classList.remove('animated');
  }, 1000);
}
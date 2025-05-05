const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", `${navHeight}px`);


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

const containers = document.querySelectorAll('.logo-container');

containers.forEach(container => {
  const logo = container.querySelector('.logo');

  logo.addEventListener("mouseover", () => {
    logo.classList.add('highlight');
  });

  logo.addEventListener("mouseout", () => {
    logo.classList.remove('highlight');
  });
});

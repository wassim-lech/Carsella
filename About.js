function toggleNavbar() {
    const navWrapper = document.querySelector('.nav-wrapper');
    const isScrolled = window.scrollY > 500; 
  
    if (isScrolled) {
      navWrapper.classList.add('visible');
    } else {
      navWrapper.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll', toggleNavbar);
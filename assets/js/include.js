// assets/js/include.js

document.addEventListener('DOMContentLoaded', () => {
  const loadPartial = (id, url) => {
    const target = document.getElementById(id);
    if (!target) return;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      })
      .then((html) => {
        target.innerHTML = html;
        
        // Initialize mobile menu after header loads
        if (id === 'header-include') {
          initMobileMenu();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Initialize mobile menu toggle
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    
    if (menuToggle && siteNav) {
      menuToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen);
      });

      // Close menu when clicking nav links
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          siteNav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  loadPartial('header-include', '/partials/header.html');
  loadPartial('footer-include', '/partials/footer.html');
});

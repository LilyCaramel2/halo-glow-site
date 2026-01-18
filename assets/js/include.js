// assets/js/include.js

function loadPartial(containerId, partialPath) {
  const container = document.getElementById(containerId);
  if (!container) return;

  fetch(partialPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${partialPath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;

      // If header loaded, wire up mobile menu toggle
      if (containerId === 'header-include') {
        const menuToggle = document.getElementById('menu-toggle');
        const siteNav = document.getElementById('site-nav');
        
        if (menuToggle && siteNav) {
          menuToggle.addEventListener('click', () => {
            const isOpen = siteNav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
          });
        }
      }
    })
    .catch(error => console.error('Include error:', error));
}

// Load header and footer
loadPartial('header-include', '/halo-glow-site/partials/header.html');
loadPartial('footer-include', '/halo-glow-site/partials/footer.html');

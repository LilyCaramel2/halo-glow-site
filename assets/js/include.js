document.addEventListener('DOMContentLoaded', function () {
  var headerContainer = document.getElementById('site-header');
  var footerContainer = document.getElementById('site-footer');

  if (headerContainer) {
    fetch('/partials/header.html')
      .then(function (response) { return response.text(); })
      .then(function (html) {
        headerContainer.innerHTML = html;
        setupNavToggle();
      })
      .catch(function (error) {
        console.error('Error loading header:', error);
      });
  }

  if (footerContainer) {
    fetch('/partials/footer.html')
      .then(function (response) { return response.text(); })
      .then(function (html) {
        footerContainer.innerHTML = html;
      })
      .catch(function (error) {
        console.error('Error loading footer:', error);
      });
  }

  function setupNavToggle() {
    var navToggle = document.querySelector('.nav-toggle');
    var navPanel = document.querySelector('.nav-panel');
    var navOverlay = document.querySelector('.nav-overlay');

    if (!navToggle || !navPanel) return;

    function closeNav() {
      navToggle.setAttribute('aria-expanded', 'false');
      navPanel.classList.remove('nav-panel-open');
      if (navOverlay) {
        navOverlay.classList.remove('nav-overlay-visible');
      }
      document.body.classList.remove('nav-locked');
    }

    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeNav();
      } else {
        navToggle.setAttribute('aria-expanded', 'true');
        navPanel.classList.add('nav-panel-open');
        if (navOverlay) {
          navOverlay.classList.add('nav-overlay-visible');
        }
        document.body.classList.add('nav-locked');
      }
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', closeNav);
    }

    navPanel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) {
        closeNav();
      }
    });
  }
});

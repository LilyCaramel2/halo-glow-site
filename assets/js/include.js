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
    var navList = document.querySelector('.nav-list');

    if (!navToggle || !navList) return;

    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      navList.style.display = expanded ? 'none' : 'block';
    });
  }
});


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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  loadPartial('header-include', '/partials/header.html');
  loadPartial('footer-include', '/partials/footer.html');
});

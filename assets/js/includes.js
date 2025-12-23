document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const name = el.getAttribute("data-include");
    const res = await fetch(`partials/${name}.html`);
    if (res.ok) el.innerHTML = await res.text();
  });
});

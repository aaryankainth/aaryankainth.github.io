document.addEventListener("DOMContentLoaded", () => {
  // fade in on load
  document.body.classList.add("fade-in");

  // fade out before navigating
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#")) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => { window.location = href; }, 400);
    });
  });
});

/* Mobile nav only. No analytics, no trackers. */
(function () {
  var btn = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (!btn || !nav) return;
  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  btn.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();

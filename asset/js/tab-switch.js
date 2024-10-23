document.querySelectorAll("[data-tabs-toggle]").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide all tab content
    document.querySelectorAll('[role="tabpanel"]').forEach((content) => {
      content.classList.add("hidden");
    });

    // Remove active class from all tabs
    document.querySelectorAll('[role="tab"]').forEach((btn) => {
      btn.setAttribute("aria-selected", "false");
    });

    // Show the current tab content
    const target = e.target.getAttribute("data-tabs-target");
    document.querySelector(target).classList.remove("hidden");
    e.target.setAttribute("aria-selected", "true");
  });
});

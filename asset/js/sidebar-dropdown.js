const buttons = document.querySelectorAll("aside button");
buttons.forEach((button) => {
  button.onclick = () => {
    const dropdownMenu = button.nextElementSibling;
    dropdownMenu.classList.toggle("hidden");
  };
});

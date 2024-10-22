const togglePasswordButton = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");
const toggleIcon = document.getElementById("toggle-icon");

togglePasswordButton.addEventListener("click", function () {
  // Toggle the type attribute
  const isPasswordHidden = passwordInput.getAttribute("type") === "password";
  passwordInput.setAttribute("type", isPasswordHidden ? "text" : "password");

  // Toggle the eye icon based on the visibility
  if (isPasswordHidden) {
    toggleIcon.src =
      "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/icon/eye-slash-svgrepo-com.svg"; // Path to your 'hide' icon
    toggleIcon.alt = "Hide Password";
  } else {
    toggleIcon.src =
      "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/icon/eye-svgrepo-com.svg"; // Path to your 'show' icon
    toggleIcon.alt = "Show Password";
  }
});

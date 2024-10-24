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

const togglePasswordButtonNew = document.getElementById("toggle-new-password");
const passwordInputNew = document.getElementById("newPassword");
const toggleIconNew = document.getElementById("toggle-new-icon");

togglePasswordButtonNew.addEventListener("click", function () {
  // Toggle the type attribute
  const isPasswordHidden = passwordInputNew.getAttribute("type") === "password";
  passwordInputNew.setAttribute("type", isPasswordHidden ? "text" : "password");

  // Toggle the eye icon based on the visibility
  if (isPasswordHidden) {
    toggleIconNew.src =
      "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/icon/eye-slash-svgrepo-com.svg"; // Path to your 'hide' icon
    toggleIconNew.alt = "Hide Password";
  } else {
    toggleIconNew.src =
      "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/icon/eye-svgrepo-com.svg"; // Path to your 'show' icon
    toggleIconNew.alt = "Show Password";
  }
});

const togglePasswordButtonConfirm = document.getElementById(
  "toggle-confirm-password"
);
const passwordInputConfirm = document.getElementById("confirmPassword");
const toggleIconConfirm = document.getElementById("toggle-confirm-icon");

togglePasswordButtonConfirm.addEventListener("click", function () {
  // Toggle the type attribute
  const isPasswordHidden =
    passwordInputConfirm.getAttribute("type") === "password";
  passwordInputConfirm.setAttribute(
    "type",
    isPasswordHidden ? "text" : "password"
  );

  // Toggle the eye icon based on the visibility
  if (isPasswordHidden) {
    toggleIconConfirm.src =
      "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/icon/eye-slash-svgrepo-com.svg"; // Path to your 'hide' icon
    toggleIconConfirm.alt = "Hide Password";
  } else {
    toggleIconConfirm.src =
      "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/icon/eye-svgrepo-com.svg"; // Path to your 'show' icon
    toggleIconConfirm.alt = "Show Password";
  }
});

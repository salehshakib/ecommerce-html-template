function copyToClipboard() {
  // Get the input element
  var copyText = document.getElementById("callbackURL");

  // Select the text inside the input
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to clipboard
  navigator.clipboard.writeText(copyText.value);

  // Optional: You can add a confirmation message or change the button text
  alert("Copied the text: " + copyText.value);
}

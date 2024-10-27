// document.documentElement.style.setProperty("--var-primary-color", "#22223b");
document.documentElement.style.setProperty("--var-primary-color", "#fb6f92");

document.documentElement.style.setProperty("--var-secondary-color", "#4a4e69");

const css = `
.primary-text {
  color: var(--var-primary-color) !important;
}
.primary-bg {
  background-color: var(--var-primary-color) !important;
}
li:hover  .hover-bg {
  background-color: var(--var-secondary-color) !important;
}
.primary-border {
  border-color: var(--var-primary-color) !important;
}
.secondary-text {
  color: var(--var-secondary-color) !important;
}
.sec-bg {
  background-color: var(--var-secondary-color) !important;  
}
.secondary-bg:hover {
  background-color: var(--var-secondary-color) !important;
}
.primary-fill {
  fill: var(--var-secondary-color) !important;
}
  .main-fill {
    fill: var(--var-primary-color) !important;}

/* Change color on li hover */
li:hover .primary-fill {
  fill: var(--var-primary-color) !important;
}

/* Change text color on hover */
.hover-text:hover {
  color: var(--var-primary-color) !important;
}
  li:hover a .hover-text {
    color: var(--var-primary-color) !important;
  }
a:hover .hover-text {
  color: var(--var-primary-color) !important;
}
 li button:hover .hover-text {
  color: var(--var-primary-color) !important;
}


`;

// Create and append the <style> element to the <head>
const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

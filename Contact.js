document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusMsg = document.getElementById("statusMsg");

  if (!name || !email || !subject || !message) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "Please fill out all fields.";
    return;
  }

  // Simulate form submission (no backend connected)
  statusMsg.style.color = "green";
  statusMsg.textContent = "Thank you! Your message has been sent.";
  document.getElementById("contactForm").reset();
});

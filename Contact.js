document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const statusMsg = document.getElementById("statusMsg");

  const response = await fetch("send_mail.php", {
    method: "POST",
    body: formData
  });

  const result = await response.text();
  if (result === "success") {
    statusMsg.style.color = "green";
    statusMsg.textContent = "Thank you! Your message has been sent.";
    this.reset();
  } else {
    statusMsg.style.color = "red";
    statusMsg.textContent = "Oops! Something went wrong. Please try again.";
  }
});


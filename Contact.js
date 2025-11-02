const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("#contactForm");


async function sendEmail(){
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    contact: document.querySelector("#contact").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };
  
  emailjs.send("service_1pk352s", "template_qdymwio", templateParams)
  .then(
    (res)=> {
      alert("email sent");
})
    .catch((err) => {
      alert("email not sent");
    })
  }


form.addEventListener("submit", async (e) => {
e.preventDefault();
submitButton.innerHTML = "Please wait..."
submitButton.setAttribute("disabled", true)
await sendEmail();
submitButton.innerHTML = "Send Message"
submitButton.setAttribute("disabled", false)
e.target.reset();
})

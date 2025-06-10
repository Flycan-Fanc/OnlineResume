import { EMAILJS_USER_ID, EMAILJS_TEMPLATE_KEY } from "./config.js";

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = EMAILJS_USER_ID;
  const templateID = EMAILJS_TEMPLATE_KEY;

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

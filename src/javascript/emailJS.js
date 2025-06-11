const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "发送中...";

  const serviceID = "service_88rmdae";
  const templateID = "template_7zs6n2h";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "发送邮件";
      alert("Sent!");
    },
    (err) => {
      btn.value = "发送邮件";
      alert(JSON.stringify(err));
    }
  );
});

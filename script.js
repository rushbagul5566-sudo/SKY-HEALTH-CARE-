function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}


function sendWhatsApp(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const service = document.getElementById("service").value;
  const location = document.getElementById("location").value;
  const message = document.getElementById("message").value;

  const text =
`Hello Sky Healthcare,

I want to book a healthcare service.

Patient / Customer Name: ${name}
Mobile: ${mobile}
Service Required: ${service}
Location: ${location}
Requirement: ${message}

Please contact me regarding the service.`;

  const whatsappURL =
    "https://wa.me/919049343193?text=" +
    encodeURIComponent(text);

  window.open(whatsappURL, "_blank");
}


document.getElementById("year").textContent =
  new Date().getFullYear();

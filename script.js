// IMPORTANT: Replace the number below with the shop's WhatsApp number.
// Use country code without + or spaces. Example: 919876543210
const WHATSAPP_NUMBER = "918789202269";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setupWhatsApp() {
  const message = "Hello S A DIGITAL HUB, I want to enquire about your services.";
  ["heroWhatsApp","contactWhatsApp","floatingWhatsApp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = waLink(message);
  });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const text = `Hello S A DIGITAL HUB,%0A%0AName: ${name}%0AMobile: ${phone}%0AService: ${message}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".nav").classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
setupWhatsApp();

document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetSection = document.querySelector(targetID);
    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: "smooth",
    });
  });
});

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) {
    alert("Nama harus diisi.");
    return;
  }
  if (!validateEmail(email)) {
    alert("Masukkan email yang valid.");
    return;
  }
  if (!message) {
    alert("Pesan harus diisi.");
    return;
  }

  alert("Terima kasih, pesan Anda telah terkirim!");
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

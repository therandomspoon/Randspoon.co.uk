const socialLinks = document.querySelectorAll(".social-links a");

socialLinks.forEach(link => {
  link.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "#333";
    this.style.color = "#fff";
    this.style.transform = "scale(1.2) rotate(5deg)";
  });
  link.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "";
    this.style.color = "#333";
    this.style.transform = "scale(1) rotate(0)";
  });
});
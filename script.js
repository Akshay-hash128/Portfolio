function scrollToProjects() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  
}
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  // Function to scroll left
  leftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -250, behavior: "smooth" });
  });

  // Function to scroll right
  rightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 250, behavior: "smooth" });
  });

  // Enable horizontal scrolling on mobile with swipe gestures
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.classList.add("active");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Multiplied for smoother scrolling
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Add touch support for mobile
  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Adjust for smoother scrolling
    carousel.scrollLeft = scrollLeft - walk;
  });
});


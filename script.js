// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Loading Screen Fadeout
window.addEventListener("load", () => {
    setTimeout(() => document.getElementById("loading-screen").style.display = "none", 1000);
});

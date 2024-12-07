// Starry background generator
function createStarryBackground() {
  const starryBackground = document.getElementById("starryBackground");
  const starCount = 200; // Number of stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const x = Math.random() * 100; // Random x position
    const y = Math.random() * 100; // Random y position
    const size = Math.random() * 3 + 1; // Random star size
    const animationDuration = Math.random() * 3 + 1; // Random animation duration

    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${animationDuration}s`;

    starryBackground.appendChild(star);
  }
}

// Initialize the starry background on page load
window.onload = createStarryBackground;

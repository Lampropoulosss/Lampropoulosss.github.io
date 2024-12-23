const overlay = document.querySelector(".overlay");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Set values based on scroll position
  const rotateValue = scrollY * 0.1; // Rotate the overlay slowly
  const opacityValue = 1 - scrollY * 0.001; // Decrease opacity when scrolling down
  const scaleValue = 1 + scrollY * 0.0005; // Gradually scale the overlay

  // Apply the transformations and keep it within bounds
  overlay.style.transform = `rotate(${30 + -rotateValue}deg) scale(${Math.min(
    scaleValue,
    1.5
  )})`;
  overlay.style.opacity = `${Math.max(opacityValue, 0.1)}`; // Ensure opacity doesn't go below 0.1
});

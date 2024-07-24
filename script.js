const mouseMove = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const mPartner = document.getElementById("mouse-partner");
  const degSq = document.getElementById("deg-viewer");
  const degText = document.getElementById("deg");

  // Get the center of the viewport
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Calculate the difference from the center
  const deltaX = x - centerX;
  const deltaY = y - centerY;

  // Calculate the angle in radians
  const angleRadians = Math.atan2(deltaY, deltaX);

  // Convert the angle to degrees
  const angleDegrees = angleRadians * (180 / Math.PI);

  // Adjust the angle to be in the range 0 to 360 degrees
  const adjustedDeg = (angleDegrees + 360) % 360;

  mPartner.style.top = (y - mPartner.offsetHeight/2) + "px";
  mPartner.style.left = (x - mPartner.offsetWidth/2) + "px";
  
  degSq.style.transform = `rotate(${adjustedDeg}deg)`;
  degText.textContent = Math.round(adjustedDeg) + " deg";
};

document.addEventListener("mousemove", mouseMove);

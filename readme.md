# JS Deg Calculate

This project demonstrates how to calculate the angle in degrees between the mouse pointer and the center of the viewport. The calculated angle is used to rotate an element on the page and display the angle in real-time as the mouse moves.

## Degree Calculation

This section describes how to calculate the angle in degrees between the mouse pointer and the center of the viewport, and then use this angle to rotate an element on the page.

### JavaScript Logic

```javascript
document.addEventListener("mousemove", (e) => {
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

  // Update the position of mPartner
  mPartner.style.top = (y - mPartner.offsetHeight / 2) + "px";
  mPartner.style.left = (x - mPartner.offsetWidth / 2) + "px";
  
  // Rotate the degSq element and display the angle
  degSq.style.transform = `rotate(${adjustedDeg}deg)`;
  degText.textContent = Math.round(adjustedDeg) + " deg";
});
```

### Explanation

1. **Event Listener**: Adds a `mousemove` event listener to the document.
2. **Mouse Position**: Uses `clientX` and `clientY` to get the mouse position.
3. **Center of the Viewport**: Calculates the center of the viewport as `(window.innerWidth / 2, window.innerHeight / 2)`.
4. **Difference Calculation**: Calculates `deltaX` and `deltaY` as the differences from the center.
5. **Angle in Radians**: Uses `Math.atan2(deltaY, deltaX)` to get the angle in radians.
6. **Convert to Degrees**: Converts the angle to degrees using `angleDegrees = angleRadians * (180 / Math.PI)`.
7. **Adjust Angle**: Adjusts the angle to the range 0 to 360 degrees with `adjustedDeg = (angleDegrees + 360) % 360`.
8. **Update Position and Rotation**: Updates the position of `mPartner`, rotates `degSq`, and displays the angle in `degText`.


<div style="margin-top: 2rem" align="center">
**End**
</div>
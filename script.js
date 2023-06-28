// function volume_sphere() {
//     //Write your code here
  
// } 

// Get the radius input, the volume input, and the calculate button
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");
const calculate = document.getElementById("submit");

// Define the sphere volume function
function volume_sphere() {
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  return volume;
}

// Add event listener to the calculate button
// submit.addEventListener("click", () => {
//   let radius = parseFloat(radius.value);
//   let volumeInput = volume_sphere(radius);
//   volume.value = volumeInput.toFixed(2);
// });
 window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

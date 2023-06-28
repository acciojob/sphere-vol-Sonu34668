// function volume_sphere() {
//     //Write your code here
  
// } 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
// Get the radius input, the volume input, and the calculate button
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");
const calculateButton = document.getElementById("calculateButton");

// Define the sphere volume function
function sphere(radius) {
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  return volume;
}

// Add event listener to the calculate button
calculateButton.addEventListener("click", () => {
  let radius = parseFloat(radiusInput.value);
  let volume = sphere(radius);
  volumeInput.value = volume.toFixed(2);
});
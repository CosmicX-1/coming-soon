var btn = document.querySelector("#contact_btn");
var btn2 = document.querySelector("#about_btn");

var aboutBox = document.querySelector(".aboutBox");
var contactBox = document.querySelector(".contactBox");

// Show the contact box when the button is clicked
btn.addEventListener("click", function () {
  contactBox.classList.toggle("show");
});

btn2.addEventListener("click", function () {
  aboutBox.classList.toggle("show");
});

// Close the contact box when clicking outside of it
document.addEventListener("click", function (event) {
  if (!contactBox.contains(event.target) && !btn.contains(event.target)) {
    contactBox.classList.remove("show");
  }

  if (!aboutBox.contains(event.target) && !btn2.contains(event.target)) {
    aboutBox.classList.remove("show");
  }
});

document
  .getElementById("contact_btn")
  .addEventListener("mouseenter", function (e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const direction = getDirection(x, y, rect.width, rect.height);

    button.classList.remove(
      "slide-left",
      "slide-right",
      "slide-top",
      "slide-bottom"
    );

    if (direction === "left") {
      button.classList.add("slide-left");
    } else if (direction === "right") {
      button.classList.add("slide-right");
    } else if (direction === "top") {
      button.classList.add("slide-top");
    } else if (direction === "bottom") {
      button.classList.add("slide-bottom");
    }
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  aboutBox.classList.remove("show");
});

function getDirection(x, y, width, height) {
  const top = y;
  const bottom = height - y;
  const left = x;
  const right = width - x;

  const min = Math.min(top, bottom, left, right);

  if (min === left) return "left";
  if (min === right) return "right";
  if (min === top) return "top";
  return "bottom";
}
let clickCount = 0;
const logo = document.querySelector(".logo");
const body = document.body;

// Create and configure the audio element
const audio = new Audio("sound/rocket.mp3"); // Replace with your sound file

// Function to create and launch a rocket
function launchRocket() {
  // Create rocket element
  const rocket = document.createElement("div");
  rocket.style.position = "fixed";
  rocket.style.bottom = "0";
  rocket.style.left = "50%";
  rocket.style.transform = "translateX(-50%)";
  rocket.style.width = "50px";
  rocket.style.height = "100px";
  rocket.style.background = "url(images/rocket.png) no-repeat center center";
  rocket.style.backgroundSize = "cover";
  rocket.style.zIndex = "1000";
  body.appendChild(rocket);

  // Play sound
  audio.play();

  // Animate rocket
  rocket.style.transition = "transform 2s linear";
  setTimeout(() => {
    rocket.style.transform = "translateX(-50%) translateY(-100vh)";
  }, 100);

  // Remove rocket after animation
  setTimeout(() => {
    body.removeChild(rocket);
  }, 3100);
}

logo.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 5) {
    launchRocket();
    body.style.background =
      "url(path/to/space-background.jpg) no-repeat center center fixed";
    body.style.backgroundSize = "cover";
    // Optional: Add some more fun animations or effects
    // For example, changing text color or adding stars
  }
});

setTimeout(() => {
  clickCount = 0;
}, 10000); // Reset after 10 seconds

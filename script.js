let clickCount = 0;
let cigarettesSmoked = 0;
let moneySpent = 0;

// prisen per cigaret
const pricePerCig = 3.15;  // man kan ændre dette til den ønskede pris

// Image frames
const frames = ["Images/frame1.png", "Images/frame2.png", "Images/frame3.png"];

const smoker = document.getElementById("smoker");
const message = document.getElementById("message");

const cigCountDisplay = document.getElementById("cigCount");
const moneyDisplay = document.getElementById("moneySpent");

// Cough sound
const coughSound = document.getElementById("coughSound");

smoker.addEventListener("click", () => {
  clickCount++;

  // Cycle through the image frames
  const frameIndex = (clickCount - 1) % frames.length;
  smoker.src = frames[frameIndex];

  // Every 3rd click = cigarette finished
  if (clickCount % 3 === 0) {
    cigarettesSmoked++;
    moneySpent += pricePerCig;

    // Update counters
    cigCountDisplay.textContent = cigarettesSmoked;
    moneyDisplay.textContent = moneySpent.toFixed(2);
}
    // Play cough sound
  if (clickCount % 15 === 0) {
    coughSound.currentTime = 0;
    coughSound.play();
    }
});
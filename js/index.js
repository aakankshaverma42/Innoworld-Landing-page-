// Function to update the countdown timer
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Check if the countdown has ended
  if (distance <= 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "EXPIRED";
    document.getElementById("timer").style.fontSize = "4rem";
    expiredTimer.style.color = "grey"; // Set color to red
    document.getElementById("startBtn").style.display = "none";
    return;
  }

  // Calculate remaining time
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the timer display
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

// Set the target date and time for the countdown (10 minutes from now)
const targetDate = new Date().getTime() + 10 * 60 * 1000;

// Initial call to update the countdown
updateCountdown();

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

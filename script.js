document.addEventListener('DOMContentLoaded', function() {
  const timerElement = document.getElementById('timer');
  const surpriseContainer = document.getElementById('surprise-container');
  const surpriseGif = document.getElementById('surprise-gif');
  let countdownInterval;
  let timeRemaining = 10;

  function updateTimerDisplay() {
    timerElement.textContent = timeRemaining;
  }

  function startCountdown() {
    updateTimerDisplay();

    countdownInterval = setInterval(function() {
      timeRemaining--;

      if (timeRemaining < 1) {
        clearInterval(countdownInterval);
        redirectToNextWebsite(); // Redirect to the next website
      } else {
        updateTimerDisplay();
      }
    }, 1000);
  }

  function redirectToNextWebsite() {
    window.location.href = 'https://rootxyash.github.io/start/'; // Replace 'https://example.com' with the URL of the next website
  }

  function showSurprise() {
    timerElement.style.display = 'none'; // Hide the timer
    surpriseContainer.style.display = 'block';
    document.body.style.backgroundColor = '#ff69b4';
  }

  surpriseGif.addEventListener('click', function() {
    clearInterval(countdownInterval);
    timeRemaining = 10;
    timerElement.style.display = 'block';
    surpriseContainer.style.display = 'none';
    document.body.style.backgroundColor = '#f0f0f0';
    startCountdown();
  });

  startCountdown();
});

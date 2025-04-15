const confettiCount = 150;
const confettiColors = ['#FFC107', '#FF5722', '#4CAF50', '#2196F3', '#E91E63'];

function createConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti-container');
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = (Math.random() * 5) + 's';
    confetti.style.animationDuration = (3 + Math.random() * 3) + 's';
    confettiContainer.appendChild(confetti);
  }
}

// Removed automatic confetti on window load

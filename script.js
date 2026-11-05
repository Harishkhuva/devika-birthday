const button = document.getElementById('confettiButton');
const toast = document.getElementById('toast');
const symbols = ['✳', '✦', '★', '🎉', '✨', '🍕', '🥞'];

button.addEventListener('click', () => {
  for (let i = 0; i < 42; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${window.innerWidth * 0.5 + (Math.random() - 0.5) * 100}px`;
    piece.style.top = `${window.innerHeight * 0.55}px`;
    piece.style.setProperty('--dx', `${(Math.random() - 0.5) * window.innerWidth}px`);
    piece.style.setProperty('--dy', `${(Math.random() - 0.8) * window.innerHeight}px`);
    piece.style.color = ['#f15b35', '#3858c8', '#f3c94f', '#f0a8a0'][Math.floor(Math.random() * 4)];
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2500);
});

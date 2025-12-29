// Enter button functionality
const enterBtn = document.getElementById('enterBtn');
const homePage = document.getElementById('homePage');
const mainContent = document.getElementById('mainContent');

// Create audio element
const bgMusic = new Audio('WarmPlace.mp3');
bgMusic.loop = true; // Loop the music
bgMusic.volume = 0.3; // Set volume to 30% (adjust as needed)

// Create music control button
const musicBtn = document.createElement('button');
musicBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
musicBtn.className = 'music-control';
musicBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #111;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;
  display: none;
`;

// Add hover effect
musicBtn.onmouseenter = () => {
  musicBtn.style.transform = 'scale(1.1)';
  musicBtn.style.background = 'rgba(191, 191, 191, 0.9)';
};

musicBtn.onmouseleave = () => {
  musicBtn.style.transform = 'scale(1)';
  musicBtn.style.background = 'rgba(255, 255, 255, 0.9)';
};

document.body.appendChild(musicBtn);

let isMusicPlaying = true;

// Toggle music on/off
musicBtn.addEventListener('click', function() {
  if (isMusicPlaying) {
    bgMusic.pause();
    musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    isMusicPlaying = false;
  } else {
    bgMusic.play();
    musicBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    isMusicPlaying = true;
  }
});

enterBtn.addEventListener('click', function() {
  // Hide home page with slow motion effect
  homePage.classList.add('hidden');
  
  // Play background music
  bgMusic.play().catch(error => {
    console.log('Audio playback failed:', error);
  });
  
  // Show music control button after a delay
  setTimeout(function() {
    musicBtn.style.display = 'block';
  }, 1000);
  
  // Show main content after transition
  setTimeout(function() {
    mainContent.classList.add('visible');
    document.body.style.overflow = 'auto';
  }, 500);
});

// Prevent scrolling on home page
document.body.style.overflow = 'hidden';
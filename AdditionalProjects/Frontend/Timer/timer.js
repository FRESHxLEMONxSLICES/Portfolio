let time = 0;
let timerInterval;
let running = false;

const timeDisplay = document.getElementById('time');
const msDisplay = document.getElementById('milliseconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Format the time in HH:MM:SS (without milliseconds)
function formatTime(milliseconds) {
  const hrs = Math.floor(milliseconds / 3600000);
  const mins = Math.floor((milliseconds % 3600000) / 60000);
  const secs = Math.floor((milliseconds % 60000) / 1000);
  
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Start the timer
startButton.addEventListener('click', () => {
  if (!running) {
    const startTime = Date.now() - time;
    timerInterval = setInterval(() => {
      time = Date.now() - startTime;
      timeDisplay.textContent = formatTime(time); // Update HH:MM:SS every second
      msDisplay.textContent = `:${Math.floor(time % 1000).toString().padStart(3, '0')}`; // Update milliseconds separately
    }, 10); // Update milliseconds every 10ms
    running = true;
  }
});

// Stop the timer
stopButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  running = false;
});

// Reset the timer
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  time = 0;
  timeDisplay.textContent = '00:00:00';
  msDisplay.textContent = ':000';
  running = false;
});

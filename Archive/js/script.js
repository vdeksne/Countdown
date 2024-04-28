function playVideo(videoSrc) {
  var mainVideo = document.getElementById('mainVideo');
  mainVideo.src = videoSrc;
  mainVideo.load();  // Ensure the new video loads
  mainVideo.play();  // Play the video

  // Add or toggle the class when the video plays
  mainVideo.classList.add('playButton');
}

function displayText(videoNumber) {
  // Hide all text elements
  const texts = document.querySelectorAll('.intro-paragraph');
  texts.forEach(text => text.style.display = 'none');

  // Display the correct text element
  const textToShow = document.getElementById(`txt-${videoNumber}`);
  textToShow.style.display = 'block';
}

window.onload = () => {
  displayText(1);  // Display the first text by default
};

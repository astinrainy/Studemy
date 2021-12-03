function playVid() {
  const catVid = document.querySelector('#vision-video');
  const VideoPaused = catVid.paused;
  if (VideoPaused) {
    catVid.play();
    videobtn.innerHTML = 'Pause Video';
  } else {
    catVid.pause();
    videobtn.innerHTML = 'Play Video';
  }
  catVid.play();
}

const videobtn = document.querySelector('#play-video-btn');

videobtn.addEventListener('click', playVid);

console.log(playVid());

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const breatheOutTime = (totalTime / 5) * 2;

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';
  //   container.classList.add('grow');
  //   container.classList.remove('shrink');

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
      //   container.classList.add('shrink');
      //   container.classList.remove('grow');
    }, 1500);
  }, 3000);
}

breathAnimation();

setInterval(breathAnimation, totalTime);

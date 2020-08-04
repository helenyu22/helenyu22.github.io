/*
PlayPause Button
*/

    let myAudio = document.querySelector('audio');
      let Btn = document.querySelector('h5');

      function playAudio() {
        myAudio.play();
      }

      Btn.addEventListener('click', playAudio);



/*
Changing Nav Text Opacity
*/

let labels = document.querySelectorAll('nav > a');
console.log(labels);

function changeOpacity() {
  labels[0].style.opacity = '0.3';
  labels[1].style.opacity = '0.3';
  labels[2].style.opacity = '0.3';
  labels[3].style.opacity = '0.3';

  this.style.opacity = '1';
  console.log(this);
}

function resetOpacity() {
  labels[0].style.opacity = '1';
  labels[1].style.opacity = '1';
  labels[2].style.opacity = '1';
  labels[3].style.opacity = '1';
}

// event listeners for hover on
labels[0].addEventListener('mouseover', changeOpacity);
labels[1].addEventListener('mouseover', changeOpacity);
labels[2].addEventListener('mouseover', changeOpacity);
labels[3].addEventListener('mouseover', changeOpacity);

// event listeners for hover off
labels[0].addEventListener('mouseout', resetOpacity);
labels[1].addEventListener('mouseout', resetOpacity);
labels[2].addEventListener('mouseout', resetOpacity);
labels[3].addEventListener('mouseout', resetOpacity);
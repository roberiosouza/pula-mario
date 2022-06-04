function getElements(){
    var mario = document.querySelector('#mario');
    var pipe = document.querySelector('#pipe');
    var clouds = document.querySelector('#clouds');
}

const jump = () => {

    getElements();
    mario.classList.add('jump');

   setTimeout(() => {
      mario.classList.remove('jump');
   }, 500);

}

const loop = setInterval(() => {
    getElements();
    const pipePostion = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPostion = clouds.offsetLeft;

    if (pipePostion <= 120 && pipePostion > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePostion}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/images/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPostion}px`;

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
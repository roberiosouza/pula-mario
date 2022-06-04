function getElements(){
    var mario = document.querySelector('#mario');
}

const jump = () => {

    getElements();
    mario.classList.add('jump');

   setTimeout(() => {
      mario.classList.remove('jump');
   }, 500);

}

document.addEventListener('keydown', jump);
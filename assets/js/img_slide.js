var container = document.querySelector('slide-container');
var thumbnails = document.querySelectorAll('.slide-container .thumb-nail');

var leftClick = document.querySelector('#slideArrowLeft');
var rightClick = document.querySelector('#slideArrowRight');

let currentIndex = 0;

leftClick.addEventListener('click', () => {
  currentIndex--;
  updateSlide(); 
});

rightClick.addEventListener('click', () => {
  currentIndex++;
  updateSlide();
});

function updateSlide() {
    thumbnails.forEach(thumbnail => {
        thumbnail.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    

}
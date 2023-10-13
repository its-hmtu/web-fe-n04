var container = document.querySelector(".slide-container");
var thumbnails = document.querySelectorAll(".slide-container .thumb-nail");

var leftClick = document.querySelector("#slideArrowLeft");
var rightClick = document.querySelector("#slideArrowRight");
var dots = document.querySelectorAll(".slide-control-dot");
var blank = document.querySelector(".slide-control-blank");
var closeOk = document.querySelector("#slideCloseOk");
var close = document.querySelector("#slideClose");
var ffImg = document.querySelector("#ffImg");
var ffImgButton = document.querySelector("#ffImgButton");
var mask = document.querySelector('.slide-dialog-mask');
// select body
const body1 = $('body');

let currentIndex = 0;

leftClick.addEventListener("click", () => {
  currentIndex--;
  updateSlide();
});

rightClick.addEventListener("click", () => {
  currentIndex++;
  updateSlide();
});

function updateSlide() {
  thumbnails.forEach((thumbnail) => {
    thumbnail.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  updateDots();
  updateArrows();
}

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function updateArrows() {
  if (currentIndex === 0) {
    leftClick.classList.add("hidden");
    blank.classList.remove("hidden");
  } else {
    leftClick.classList.remove("hidden");
    blank.classList.add("hidden");
  }

  if (currentIndex === dots.length - 1) {
    rightClick.classList.add("hidden");
    closeOk.classList.remove("hidden");
  } else {
    rightClick.classList.remove("hidden");
    closeOk.classList.add("hidden");
  }
}

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    // Remove active class from all dots
    dots.forEach((d) => d.classList.remove("active"));

    // Get clicked dot index
    const clickedIndex = Array.from(dots).indexOf(e.target);

    // Update current index
    currentIndex = clickedIndex;

    // Add active class to clicked dot
    e.target.classList.add("active");

    // Update slides
    updateSlide();
  });
});

close.addEventListener("click", () => {
  container.classList.add("hidden");
  // set body overflow to auto
  body1.css('overflow', 'auto');

});


ffImg.addEventListener('click', handleClick);
ffImgButton.addEventListener('click', handleClick);

function handleClick() {
    container.classList.remove('hidden');
    body1.css('overflow', 'hidden');
}

function handleClick(e) {
    e.preventDefault();
    container.classList.remove('hidden');
    body1.css('overflow', 'hidden');
}

mask.addEventListener('click', () => {
    container.classList.add('hidden');
    body1.css('overflow', 'auto');
});

closeOk.addEventListener('click', () => {
    container.classList.add('hidden');
    body1.css('overflow', 'auto');
});

var container = document.querySelector(".slide-container");
var thumbnails = document.querySelectorAll(".slide-container .thumb-nail");

var leftClick = document.querySelector(".arrow-left");
var rightClick = document.querySelector(".arrow-right");
var dots = document.querySelectorAll(".slide-control-dot");
var blank = document.querySelector(".slide-control-blank");
var closeOk = document.querySelector(".slide-control-close-ok");
var close = document.querySelector(".slide-control-close");
var mask = document.querySelector('.slide-dialog-mask');
var imgs = document.querySelectorAll('.section-4 img');
var imgButtons = document.querySelectorAll('.section-4 .item-link');
var thumbnailContainers = document.querySelectorAll('.slide-item .thumb-nail-container');

var currentImg = 0;
let currentIndex = 0;

imgs.forEach((item) => {
  item.addEventListener("click", handleClick);
});

function handleClick() {
  currentImg = Array.from(imgs).indexOf(this);
  container.classList.remove('hidden');
  body.toggleClass('overflow-hidden');

  thumbnailContainers[currentImg].classList.remove('hidden');
  if (currentImg === 1) {
    dots[dots.length - 1].classList.add('hidden');
  } else {
    dots[dots.length - 1].classList.remove('hidden');
  }
}

imgButtons.forEach((item) => {
  item.removeAttribute('href');
  item.addEventListener("click", handleClickButton);
});

function handleClickButton() {
  currentImg = Array.from(imgButtons).indexOf(this);
  container.classList.remove('hidden');
  body.toggleClass('overflow-hidden');
  
  thumbnailContainers[currentImg].classList.remove('hidden');
  if (currentImg === 1) {
    dots[dots.length - 1].classList.add('hidden');
  } else {
    dots[dots.length - 1].classList.remove('hidden');
  }
}

close.addEventListener("click", () => {
  container.classList.add("hidden");
  // set body overflow to auto
  body.toggleClass('overflow-hidden');
  
  thumbnailContainers[currentImg].classList.add('hidden');
  currentIndex = 0;
  currentImg = 0;
  updateSlide();
});

mask.addEventListener('click', () => {
    container.classList.add('hidden');
    body.toggleClass('overflow-hidden');
    
    thumbnailContainers[currentImg].classList.add('hidden');
    currentIndex = 0;
    currentImg = 0;
    updateSlide();
});

closeOk.addEventListener('click', () => {
    container.classList.add('hidden');
    body.toggleClass('overflow-hidden');
    
    thumbnailContainers[currentImg].classList.add('hidden');
    currentIndex = 0;
    currentImg = 0;
    updateSlide();
});

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

// Cập nhật các phím điều hướng sau mỗi lần chuyển
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

  if (currentImg === 1 && currentIndex === 1) {
    rightClick.classList.add("hidden");
    closeOk.classList.remove("hidden");
  }
}

// Cập nhật lại nút sau mỗi lần chuyển 
function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// sự kiện của các nút
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    // Remove active class from all dots
    dots.forEach((d) => d.classList.remove("active"));

    // Get clicked dot index
    const clickedIndex = Array.from(dots).indexOf(e.target);

    // Update current indexS
    currentIndex = clickedIndex;

    // Add active class to clicked dot
    e.target.classList.add("active");

    // Update slides
    updateSlide();
  });
});




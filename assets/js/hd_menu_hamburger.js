// @Hoang Minh Tu - 21011638

$(document).ready(() => {
    hamburgerButton();
});

var mask = $(".menu-mask");
var button = $(".hamburger-button");
var menu = $(".menu-hamburger");
var sb_middle = $("#sb-closed-middle-line");
var sb_top = $("#sb-closed-top-line");
var sb_bottom = $("#sb-closed-bottom-line");
var body = $("body");

console.log(body);

hamburgerButton = () => {
    button.click(() => {
        menu.toggleClass('menu-toggle') ? menuOpen() : menuClose();
    });
}

menuClose = () => {
    mask.toggleClass('hidden');
    body.css("overflow", "auto");

    sb_middle.toggleClass("hb-mid-OPEN");
    sb_top.toggleClass("hb-top-OPEN");
    sb_bottom.toggleClass("hb-bottom-OPEN");
}

menuOpen = () => {
    mask.toggleClass('hidden');
    body.css("overflow-y", "hidden");

    sb_middle.toggleClass("hb-mid-OPEN");
    sb_top.toggleClass("hb-top-OPEN");
    sb_bottom.toggleClass("hb-bottom-OPEN");
}

// var buttonHamburger = document.querySelector('.hamburger-button');
// var menuHamburgerMask = document.querySelector('.menu-hamburger__mask');
// var menuHamburger = document.querySelector('.menu-hamburger');
// var body = document.querySelector('body');
// var headerNavBar = document.querySelector('.header__nav-bar');
// var sb_middle = document.querySelector('#sb-closed-middle-line');
// var sb_top = document.querySelector('#sb-closed-top-line');
// var sb_bottom = document.querySelector('#sb-closed-bottom-line');
// var navBarLeft = document.querySelector('.nav-bar__left');
// var navBarRight = document.querySelector('.nav-bar__right');
// var menuHamburgerButton = document.querySelector('.menu-hamburger-button');



// menuOpen = () => {
//     menuHamburgerMask.classList.toggle('hidden');
//     body.style.overflow = body.style.overflow = 'hidden';

//     headerNavBar.style.boxShadow = '0px 4px 3px -3px rgba(0,0,0,0.17)';

//     sb_middle.classList.remove("sb-hamburgerButton-middleLine-CLOSED");
//     sb_middle.classList.add("sb-hamburgerButton-middleLine-OPEN");

//     sb_top.classList.remove("sb-hamburgerButton-topLine-CLOSED");
//     sb_top.classList.add("sb-hamburgerButton-topLine-OPEN");

//     sb_bottom.classList.remove("sb-hamburgerButton-bottomLine-CLOSED");
//     sb_bottom.classList.add("sb-hamburgerButton-bottomLine-OPEN");
// }

// menuClose = () => {
//     menuHamburgerMask.classList.toggle('hidden');
//     body.style.overflow = body.style.overflow = 'auto';

//     sb_middle.classList.remove("sb-hamburgerButton-middleLine-OPEN");
//     sb_middle.classList.add("sb-hamburgerButton-middleLine-CLOSED");

//     sb_top.classList.remove("sb-hamburgerButton-topLine-OPEN");
//     sb_top.classList.add("sb-hamburgerButton-topLine-CLOSED");

//     sb_bottom.classList.remove("sb-hamburgerButton-bottomLine-OPEN"); 
//     sb_bottom.classList.add("sb-hamburgerButton-bottomLine-CLOSED");
// }  

// var clickHamburger = buttonHamburger.addEventListener('click', () => {
//     menuHamburger.classList.toggle('menu-hamburger-toggle');
//     if (menuHamburger.classList.contains('menu-hamburger-toggle')) {
//         menuOpen();
//     } else 
//     {
//         menuClose();
//     }
// });  





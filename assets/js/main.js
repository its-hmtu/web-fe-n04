var buttonHamburger = document.querySelector('.hamburger-button');
var menuHamburgerMask = document.querySelector('.menu-hamburger__mask');
var menuHamburger = document.querySelector('.menu-hamburger');
var body = document.querySelector('body');
var headerNavBar = document.querySelector('.header__nav-bar');
var sb_middle = document.querySelector('#sb-closed-middle-line');
var sb_top = document.querySelector('#sb-closed-top-line');
var sb_bottom = document.querySelector('#sb-closed-bottom-line');
var dropDownButton = document.getElementsByClassName('drop-down-button');
var dropDownListExpander = document.getElementsByClassName('drop-down-list-expander');
var footerColumnList = document.getElementsByClassName('footer-column__list-expand');
var navBarLeft = document.querySelector('.nav-bar__left');
var navBarRight = document.querySelector('.nav-bar__right');
var menuHamburgerButton = document.querySelector('.menu-hamburger-button');



menuOpen = () => {
    menuHamburgerMask.classList.toggle('hidden');
    body.style.overflow = body.style.overflow = 'hidden';

    headerNavBar.style.boxShadow = '0px 4px 3px -3px rgba(0,0,0,0.17)';

    sb_middle.classList.remove("sb-hamburgerButton-middleLine-CLOSED");
    sb_middle.classList.add("sb-hamburgerButton-middleLine-OPEN");

    sb_top.classList.remove("sb-hamburgerButton-topLine-CLOSED");
    sb_top.classList.add("sb-hamburgerButton-topLine-OPEN");

    sb_bottom.classList.remove("sb-hamburgerButton-bottomLine-CLOSED");
    sb_bottom.classList.add("sb-hamburgerButton-bottomLine-OPEN");
}

menuClose = () => {
    menuHamburgerMask.classList.toggle('hidden');
    body.style.overflow = body.style.overflow = 'auto';

    sb_middle.classList.remove("sb-hamburgerButton-middleLine-OPEN");
    sb_middle.classList.add("sb-hamburgerButton-middleLine-CLOSED");

    sb_top.classList.remove("sb-hamburgerButton-topLine-OPEN");
    sb_top.classList.add("sb-hamburgerButton-topLine-CLOSED");

    sb_bottom.classList.remove("sb-hamburgerButton-bottomLine-OPEN"); 
    sb_bottom.classList.add("sb-hamburgerButton-bottomLine-CLOSED");
}  

var clickHamburger = buttonHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('menu-hamburger-toggle');
    if (menuHamburger.classList.contains('menu-hamburger-toggle')) {
        menuOpen();
    } else 
    {
        menuClose();
    }
});


Array.from(dropDownListExpander).forEach(list => {
    list.style.height = 0 + 'px';
});


Array.from(dropDownButton).forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement.parentElement;
    const dropDownExpander = parent.children[1];
    const list = dropDownExpander.children[0];
    const svg = button.children[1];
    var height = list.clientHeight;
    
    if (dropDownExpander.style.height === 0 + 'px') {
        svg.style.transform = 'rotate(180deg)';
        dropDownExpander.style.height = height + 'px';
        dropDownExpander.classList.add('drop-down-list-expander-toggle');
    }
    else {
        svg.style.transform = 'rotate(0deg)';
        dropDownExpander.style.height = 0 + 'px';
        ropDownExpander.classList.remove('drop-down-list-expander-toggle');
    }
  });
});
    





// @Hoang Minh Tu - 21011638

$(document).ready(() => {
    hamburgerButton();
    moreMenu();
});

var menu_mask = $(".menu-mask");
var button = $(".hamburger-button");
var menu = $(".menu-hamburger");
var sb_middle = $("#sb-closed-middle-line");
var sb_top = $("#sb-closed-top-line");
var sb_bottom = $("#sb-closed-bottom-line");
var body = $("body");
var moreButton = $('.item-menu-more');
var dropdownMenu = $('.menu-relative .drop-down-menu');
var menuBackButton = $('.menu-back-button');

var isOpen = false;

hamburgerButton = () => {
    button.click(() => {
        menu.toggleClass('menu-toggle');
        (isOpen) ? menuOpen() : menuClose();
    });
}

menuClose = () => {
    menu_mask.toggleClass('hidden');
    body.toggleClass("overflow-hidden");

    sb_middle.toggleClass("hb-mid-OPEN");
    sb_top.toggleClass("hb-top-OPEN");
    sb_bottom.toggleClass("hb-bottom-OPEN");
    dropdownMenu.removeClass('more-menu-open');
    isOpen = false;
}

menuOpen = () => {
    menu_mask.toggleClass('hidden');
    body.toggleClass("overflow-hidden");

    sb_middle.toggleClass("hb-mid-OPEN");
    sb_top.toggleClass("hb-top-OPEN");
    sb_bottom.toggleClass("hb-bottom-OPEN");
    isOpen = true;
}

moreMenu = () => {
    moreButton.click(() => {
        dropdownMenu.addClass('more-menu-open');
    });

    menuBackButton.click(() => {
        dropdownMenu.removeClass('more-menu-open');
    });
}



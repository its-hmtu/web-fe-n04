$(document).ready(function() {
    var regionButton = $('.item-region');
    var languagePicker = $('.language-picker');
    var pickerCloseButton = $('.picker-close');
    regionButton.on('click', function() {
        languagePicker.css('display', 'block');
    });

    pickerCloseButton.on('click', function() {
        languagePicker.css('display', 'none');
    });

    // Set initial width
    $('.progress-bar').css('width', '0%'); 

    $(window).on('scroll', function() {

    // Calculate scroll progress
    var winScroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var scrolled = (winScroll / height) * 100;

    // Update progress bar width
    $('.progress-bar').css('width', scrolled + '%');

    });
});



// progress bar

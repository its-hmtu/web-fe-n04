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

    // Thiết lập chiều dài progress bar
    $('.progress-bar').css('width', '0%'); 

    $(window).on('scroll', function() {

        // Tính toán chiều dài của progress bar
        var winScroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var scrolled = (winScroll / height) * 100;

        // cập nhật chiều dài
        $('.progress-bar').css('width', scrolled + '%');

    });
});

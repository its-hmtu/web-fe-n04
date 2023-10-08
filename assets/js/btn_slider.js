// @ Hoang Minh Tu - 21011638
$(document).ready(() => {
    const buttons = $('.item-button');
    const slider = $('.button-slider');
    const thumbnails = $('.thumb-nail-container').find('.thumb-nail-row');


    var currentButton = buttons[0];
    var currentThumbnail = thumbnails[0];
    currentThumbnail = $(currentThumbnail);
    currentThumbnail.removeClass('thumb-nail-invisible');
    currentThumbnail.addClass('thumb-nail-visible');

    currentButton = $(currentButton);
    slider.css('left', currentButton.offset().left + 'px');
    buttons.click(function() {
        currentButton = $(this);
        slider.css('left', currentButton.offset().left + 'px');
    
        // var totalPadding = parseInt(currentButton.css('padding-left')) + 
        //            parseInt(currentButton.css('padding-right'));

        // slider.css('width', (currentButton.width() + totalPadding) + 'px' );

        currentThumbnail.removeClass('thumb-nail-visible');
        currentThumbnail.addClass('thumb-nail-invisible');

        currentThumbnail = $(thumbnails[currentButton.index()]);
        currentThumbnail.removeClass('thumb-nail-invisible');
        currentThumbnail.addClass('thumb-nail-visible');
    });
});

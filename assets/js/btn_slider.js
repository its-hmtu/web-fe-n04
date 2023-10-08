// @ Hoang Minh Tu - 21011638

// $(document).ready(() => {
//     const buttons = $('.item-button');
//     const slider = $('.button-slider');
//     const thumbnails = $('.thumb-nail-container').find('.thumb-nail-row');

//     var currentButton = buttons[0];
//     var currentThumbnail = thumbnails[0];
//     currentThumbnail = $(currentThumbnail);
//     currentThumbnail.removeClass('thumb-nail-invisible');
//     currentThumbnail.addClass('thumb-nail-visible');

//     buttons.click(function() {
//         currentButton = $(this);
//         var buttonPosition = currentButton.position().left; // Calculate relative position
//         slider.css('left', buttonPosition + 'px');
        
//         slider.css('width', currentButton.outerWidth() + 'px')

//         currentThumbnail.removeClass('thumb-nail-visible');
//         currentThumbnail.addClass('thumb-nail-invisible');

//         currentThumbnail = $(thumbnails[currentButton.index()]);
//         currentThumbnail.removeClass('thumb-nail-invisible');
//         currentThumbnail.addClass('thumb-nail-visible');
//     });
// });

$(document).ready(() => {
    const buttons = $('.item-button');
    const slider = $('.button-slider');
    const thumbnails = $('.thumb-nail-container').find('.thumb-nail-row');
    let currentButton = buttons.first();
    let currentThumbnail = thumbnails.first().removeClass('thumb-nail-invisible').addClass('thumb-nail-visible');
  
    buttons.click(function() {
      currentButton = $(this);
      const buttonPosition = currentButton.position().left;
      slider.css({
        left: buttonPosition + 'px',
        width: currentButton.outerWidth() + 'px'
      });
  
      currentThumbnail.removeClass('thumb-nail-visible').addClass('thumb-nail-invisible');
      currentThumbnail = $(thumbnails[currentButton.index()]).removeClass('thumb-nail-invisible').addClass('thumb-nail-visible');
    });
  });



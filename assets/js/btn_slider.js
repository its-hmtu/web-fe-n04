// @ Hoang Minh Tu - 21011638

$(document).ready(() => {
    const buttons = $('.item-button');
    const slider = $('.button-slider');
    const thumbnails = $('.thumb-nail-container').find('.thumb-nail');
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



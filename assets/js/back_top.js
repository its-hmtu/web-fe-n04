var bacKTopButton = $('.back-to-top .item-bp');
var bacKTopContainer = $('.back-to-top');

// back to top button 
$(window).scroll(() => {
    if ($(this).scrollTop() > 500) {
        bacKTopContainer.css('transform', 'translatex(-20%)');
    } else {
        bacKTopContainer.css('transform', 'translatex(150%)');
    }
  });
  
  bacKTopButton.click(() => {
    $('html').animate({
      scrollTop: 0
    }, 500);
  });

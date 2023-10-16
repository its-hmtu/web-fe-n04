var bacKTopButton = $('.back-to-top .item-bp');
var bacKTopContainer = $('.back-to-top');

// back to top button 
$(window).scroll(() => {
    // Hiển thị nút back to top khi cuộn quá 500px
    if ($(this).scrollTop() > 500) {
        bacKTopContainer.css('transform', 'translatex(-20%)');
    } else {
        bacKTopContainer.css('transform', 'translatex(150%)');
    }
  });
  
  // Lắng nghe sự kiện click vào nút quay về đầu trang
  bacKTopButton.click(() => {
    $('html').animate({
      scrollTop: 0
    }, 500);
  });

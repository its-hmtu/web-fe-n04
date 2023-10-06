// @ Hoang Minh Tu - 21011638
$(document).ready(function() {
    const buttons = $('.item-button');
    const slider = $('.button-slider');

    var currentButton = buttons[0];

    buttons.click(function() {
        currentButton = $(this);
        slider.css('left', currentButton.offset().left + 'px');
        
    });
});

// // Get buttons and slider
// const buttons = document.querySelectorAll('.item-button');
// const slider = document.querySelector('.button-slider');

// // Set initial position
// let activeButton = buttons[0];
// slider.style.left = activeButton.offsetLeft + 'px';

// console.log(activeButton.offsetLeft);

// // Click event listener
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
    
//     // Update active button
//     activeButton = button;
    
//     // Move slider
//     slider.style.left = activeButton.offsetLeft + 'px';
//   }); 
// });

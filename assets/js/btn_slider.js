// @ Hoang Minh Tu - 21011638
var images = ['25', '100', '200', '300', '400'];
    var titles = [
        'Customize your drink',
        'Brewed hot or iced coffee of tea, bakery item, packaged snack and more',
        'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
        'Sandwich, protein box or at-home coffee',
        'Select Starbucks® merchandise'
    ];
    var descriptions = [
        'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.',
        'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.',
        'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.',
        'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.',
        'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.'
    ];
$(document).ready(function() {
    const buttons = $('.item-button');
    const slider = $('.button-slider');
    
    var currentButton = buttons[0];
    buttons.click(function() {
        currentButton = $(this);
        slider.css('left', currentButton.offset().left + 'px');
    
        // get the total width of padding left and right of current button
        var totalPadding = parseInt(currentButton.css('padding-left')) + 
                   parseInt(currentButton.css('padding-right'));

        slider.css('width', (currentButton.width() + totalPadding) + 'px' );

        var currentThumbnail = currentButton.parent().siblings('.thumb-nail-row');
        currentThumbnail.find('img').fadeOut(150, function() {
            $(this).attr('src', 'assets/img/rewards/' + images[currentButton.index()] + '.webp').fadeIn(200); // Adjust the fade duration as needed
        });
        currentThumbnail.find('.thumb-nail__title').fadeOut(150, function() {
            $(this).text(titles[currentButton.index()]).fadeIn(200);
        });
        currentThumbnail.find('.thumb-nail__description').fadeOut(150, function() {
            $(this).text(descriptions[currentButton.index()]).fadeIn(200);
        });
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

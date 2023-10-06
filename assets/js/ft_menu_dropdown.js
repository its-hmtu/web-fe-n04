// @Hoang Minh Tu - 21011638

$(document).ready(() => {
    dropDown();
});

dropDown = () => {
    var expanders = $(".drop-down-list-expander");
    var buttons = $(".drop-down-button");

    expanders.height(0);

    buttons.click(function() {
        var button = $(this);
        var dropDownListExpander = button.parent().siblings('.drop-down-list-expander');
        var list = dropDownListExpander.children();
        var svg = button.children()[1];
        svg.style.transition = 'transform 0.35s ease-in-out';

        if (dropDownListExpander.height() === 0) {
            svg.style.transform = 'rotate(180deg)';
            dropDownListExpander.height(list.height());
            dropDownListExpander.addClass('drop-down-list-expander-toggle');
        } else {
            svg.style.transform = 'rotate(0deg)';
            dropDownListExpander.height(0);
            dropDownListExpander.removeClass('drop-down-list-expander-toggle');
        }
    });
}

// var dropDownButton = document.getElementsByClassName('drop-down-button');
// var dropDownListExpander = document.getElementsByClassName('drop-down-list-expander');
// var footerColumnList = document.getElementsByClassName('footer-column__list-expand');

// Array.from(dropDownListExpander).forEach(list => {
//     list.style.height = 0 + 'px';
// });


// Array.from(dropDownButton).forEach(button => {
//   button.addEventListener('click', () => {
//     const parent = button.parentElement.parentElement;
//     const dropDownExpander = parent.children[1];
//     const list = dropDownExpander.children[0];
//     const svg = button.children[1];
//     var height = list.clientHeight;
    
//     if (dropDownExpander.style.height === 0 + 'px') {
//         svg.style.transform = 'rotate(180deg)';
//         dropDownExpander.style.height = height + 'px';
//         dropDownExpander.classList.add('drop-down-list-expander-toggle');
//     }
//     else {
//         svg.style.transform = 'rotate(0deg)';
//         dropDownExpander.style.height = 0 + 'px';
//         ropDownExpander.classList.remove('drop-down-list-expander-toggle');
//     }
//   });
// });
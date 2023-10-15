// @Hoang Minh Tu - 21011638

$(document).ready(() => {
    dropDown();
});

dropDown = () => {
    var expanders = $(".list-expander");
    var buttons = $(".drop-down-button");

    expanders.height(0);

    buttons.click(function() {
        var button = $(this);
        var dropDownListExpander = button.parent().siblings('.list-expander');
        var list = dropDownListExpander.children();
        var svg = button.children()[1];
        svg.style.transition = 'transform 0.35s ease-in-out';

        if (dropDownListExpander.height() === 0) {
            svg.style.transform = 'rotate(180deg)';
            dropDownListExpander.height(list.height());
        } else {
            svg.style.transform = 'rotate(0deg)';
            dropDownListExpander.height(0); 
        }
    });
}

// @Hoang Minh Tu - 21011638

var inputField = $(".input-field");
var cardExpanderContainer = $(".card-rewards-expander-container");
var inputFields = cardExpanderContainer.find(".input-fields");
var cardExpanderButton = $('.card-rewards-expander');
var expanderIcon = cardExpanderButton.find('svg');
console.log(expanderIcon)

inputField.each(function() {
    var _this = $(this);
    var input = _this.find(".input-field__input");
    var label = _this.find(".input-field__label");
    var span = _this.find(".light-green");
    input.on("focus", function() {
        label.addClass("input-field__label-focus");
        
    });
    input.on("blur", function() {
        if (input.val() === "") {
            label.removeClass("input-field__label-focus");
            label.addClass("input-field__label-fail");
            _this.addClass("input-field__fail");
            span.removeClass("light-green");
        }
        else {
            label.removeClass("input-field__label-fail");
            _this.removeClass("input-field__fail");
            span.addClass("light-green"); 
        }
    });
});

$('form').submit(function(e) {
   e.preventDefault();
});
cardExpanderContainer.height(0);
expanderIcon.css('transition', 'transform 0.35s ease-in-out');
cardExpanderButton.click(function() {
    if (cardExpanderContainer.height() === 0) {
        cardExpanderContainer.height(inputFields.height());
        expanderIcon.css('transform', 'rotate(180deg)');
    } else {
        cardExpanderContainer.height(0); 
        expanderIcon.css('transform', 'rotate(0deg)');
    }
});


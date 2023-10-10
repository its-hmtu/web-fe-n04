// @Hoang Minh Tu - 21011638

var inputField = $(".input-field");
$(".field-status").height(0);

inputField.each(function() {
    var _this = $(this);
    var input = _this.find(".input-field__input");
    var label = _this.find(".input-field__label");
    var span = _this.find(".light-green");
    var fieldStatus = _this.find(".field-status");
    console.log(fieldStatus);
    var fieldStatusInner = _this.find(".field-status_inner");
    console.log(fieldStatusInner);
    input.on("focus", function() {
        label.addClass("input-field__label-focus");
        
    });
    input.on("blur", function() {
        if (input.val() === "") {
            label.removeClass("input-field__label-focus");
            label.addClass("input-field__label-fail");
            _this.addClass("input-field__fail");
            span.removeClass("light-green");
            fieldStatusInner.toggleClass("hidden");
            fieldStatus.height(22);
        }
        else {
            label.removeClass("input-field__label-fail");
            _this.removeClass("input-field__fail");
            span.addClass("light-green"); 
            fieldStatusInner.toggleClass("hidden");
            fieldStatus.height(0);
        }
    });
    
    // inputField.addClass("input-field__focus");
});

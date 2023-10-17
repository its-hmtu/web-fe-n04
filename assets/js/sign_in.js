// Doan Quoc Trung - 21011634

var inputField = $(".input-field");

inputField.each(function() {
    var onclick = $(this);
    var input = onclick.find(".input-field-input");
    var label = onclick.find(".input-field-label");
    var span = onclick.find(".star-green");

    input.on("focus", function() {
        label.addcClass("input-field-label-focus");
    });

    input.on("blur", function() {
        if (input.val() == "") {
            label.removeClass("input-field-label-focus");
            label.addClass("input-field-label-error");
            onclick.addClass("input-field-error");
            span.removeClass("star-green");
        } else {
            label.removeClass("input-field-label-error");
            onclick.removeClass("input-field-error");
            span.addClass("star-green");
        }
    });
});
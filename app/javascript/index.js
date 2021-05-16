$(document).ready(function () {
    $("#body").show(function (event) {
        event.preventDefault();
        var formData = {
            title: $("#title").val(),
            content: $("#content").val(),
        };
        $.ajax({
            type: "GET",
            url: '/',
            data: formData,
            dataType: 'JSON',
        });
    });
});
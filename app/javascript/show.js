$(document).ready(function () {
    $("#show").click(function (event) {
        event.preventDefault();
        var formData = {
            title: $("#title").val(),
            content: $("#content").val()
        };
        $.ajax({
            type: "GET",
            url: '/posts/',
            data: formData,
            dataType: 'JSON'
        });
    });
});
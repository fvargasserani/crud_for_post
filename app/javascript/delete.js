$(document).ready(function () {
    $("#delete").click(function (event) {
        event.preventDefault();
        var formData = {
            title: $("#title").val(),
            content: $("#content").val(),
        };
        $.ajax({
            type: "DELETE",
            url: '/',
            data: formData,
            dataType: 'JSON',
        });
    });
});
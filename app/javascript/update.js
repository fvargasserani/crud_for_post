$(document).ready(function () {
    $("#edit").click(function (event) {
        event.preventDefault();
        var formData = {
            title: $("#title").val(),
            content: $("#content").val()
        };
        $.ajax({
            type: "PUT",
            url: '/posts/',
            data: formData,
            dataType: 'JSON'
        });
    });
});
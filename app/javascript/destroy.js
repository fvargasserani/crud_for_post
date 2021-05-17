$(document).ready(function () {
    $("#delete").click(function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax({
            type: "DELETE",
            url: '/posts/' + id,
            data: { "id": id },
            success: function () {
                console.log("it Works")
            }
        });
    });
});
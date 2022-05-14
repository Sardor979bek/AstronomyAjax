$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });

function getPicture() {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=GE5r6C7fP26s1Ta8sSkFkoJtNrvAdddi4FsCj1wS&date=" + $("#date").val(),
        type: "GET",
        data: {
            api_key: "DEMO_KEY",
            date: $("#date").val()
        },
        dataType: "json",
        "success": showPicture,
        "error": noPicture
    });
};

function showPicture(data) {
    $("#title").text(data.title);
    $("#picture").attr("src", data.url);
};

function noPicture(error) {
    alert(error.responseText);
};
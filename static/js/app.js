//$.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {tags: 'animal', format: 'json'}, data => console.log(data));
// $.getJSON(url, data, callback)

function getData() {

    var input = $("#searchtext").val()

    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    $.getJSON(flickerAPI, {
        tags: $("#searchtext").val(),
        tagmode: "any",
        format: "json"
    }).done(function (data) {
        $.each(data.items, function (i, item) {
            $("<img>").attr("src", item.media.m).appendTo("#images");
            if (i === 11) {
                return false;
            }
        });
    });
}
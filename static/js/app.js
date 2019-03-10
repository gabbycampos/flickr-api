//$.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {tags: 'animal', format: 'json'}, data => console.log(data));
// $.getJSON(url, data, callback)

function getData() {
    $('#images').html("");

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

// Drop-down menu animates
$('button#background-color').click(function() {
    $('aside#background-color-menu').toggleClass('slide-down');
});

// Menu animates off of stage when user presses ESC key
$(document).keyup(function(e) {
    if (e.keyCode == 27){
        $('aside').removeClass('slide-down');
        $('button#background-color').removeClass('page-buttons-active').addClass('page-buttons');
    }
});

// aside button clicked will remove the active state from the interface button
$('aside#background-color-menu button').click(function(){
    $('button#background-color').toggleClass('page-buttons-active').toggleClass('page-buttons');
});

// remove color class from universal selector
// remove hover state from all font buttons
// apply hover state to font button clicked
// close font menu
$('aside#background-color-menu ol li button').click(function(){
    $('*').removeClass('black red orange yellow green cyan blue purple magenta white');
    $('aside#background-color-menu button').removeClass('interface-button-active');
    $(this).addClass('interface-button-active');
    $('aside#background-color-menu').removeClass('slide-down');
});

// Background-Color buttons
$('button#black').click(function(){
    $('body').addClass('black');
});
$('button#red').click(function () {
    $('body').addClass('red');
});
$('button#orange').click(function () {
    $('body').addClass('orange');
});
$('button#yellow').click(function () {
    $('body').addClass('yellow');
});
$('button#green').click(function () {
    $('body').addClass('green');
});
$('button#cyan').click(function () {
    $('body').addClass('cyan');
});
$('button#blue').click(function () {
    $('body').addClass('blue');
});
$('button#purple').click(function () {
    $('body').addClass('purple');
});
$('button#magenta').click(function () {
    $('body').addClass('magenta');
});
$('button#white').click(function () {
    $('body').addClass('white');
});
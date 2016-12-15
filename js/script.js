// refreshes window when crossing media query
// allows scrolling background to resize
var context;
var $window = $(window);

if ($window.width() <= 480) {
    context = "xs";
} else if (480 < $window.width() < 768) {
    context = "sm";
} else {
    context = "reg";
}

$(window).resize(function() {
    if(($window.width() <= 480) && (context != "xs")) {
        location.reload();
    } else if ((480 < $window.width() < 768) && (context != "sm")) {
        location.reload();
    } else if (context != "reg") {
        location.reload();
    }
});

// scrolling background
var jumboHeight = $(".jumbotron").outerHeight();

function parallax() {
    var scrolled = $(window).scrollTop();
    $(".bg").css("height", (jumboHeight - scrolled + 50) + "px");
}

$(window).scroll(function (e) {
    parallax();
});
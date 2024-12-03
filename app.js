

$(function () {

    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

    });
    // ye me isko bata raha hu ki by-default sab ko hide kardena sirf intro ko chor ke.

    $(".glass-effect-project").hide();
    $(".glass-effect-intro").show();
    $(".glass-effect-contact").hide();
    $(".glass-effect-skill").hide();

    // yaha pe mene isko bataya hai ke jab skills pe click ho to sabko hide kardena sirf skills ko chor ke.

    $("#skills").click(function () {
        $(".glass-effect-project").hide();
        $(".glass-effect-intro").hide();
        $(".glass-effect-contact").hide();
        $(".glass-effect-skill").show();
    });

    // yaha pe mene isko bataya hai ke jab intro pe click ho to sabko hide kardena sirf intro ko chor ke.

    $("#intro").click(function () {
        $(".glass-effect-intro").show();
        $(".glass-effect-project").hide();
        $(".glass-effect-contact").hide();
        $(".glass-effect-skill").hide();
    });

    // yaha pe mene isko bataya hai ke jab projects pe click ho to sabko hide kardena sirf projects ko chor ke.

    $("#projects").click(function () {
        $(".glass-effect-intro").hide();
        $(".glass-effect-skill").hide();
        $(".glass-effect-project").show();
        $(".glass-effect-contact").hide();
    });

    // yaha pe mene isko bataya hai ke jab contact pe click ho to sabko hide kardena sirf contact ko chor ke.

    $("#contact").click(function () {
        $(".glass-effect-contact").show();
        $(".glass-effect-skill").hide();
        $(".glass-effect-intro").hide();
        $(".glass-effect-project").hide();

    });


    $(".phone1").hover(function () {
        $(".phone1").html("03252436687");
    });

    $(".phone2").hover(function () {
        $(".phone2").html("03322096686");
    });
    $(".switch").click(function () {
        $("body").toggleClass("body-light");
    });

});

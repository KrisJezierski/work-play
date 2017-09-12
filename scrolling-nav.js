
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
// my own to add a white background
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".navbarfixed").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbarfixed").removeClass("active");
    }
});
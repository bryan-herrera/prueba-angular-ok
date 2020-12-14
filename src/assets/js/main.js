$('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace) {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: true
});

//animación icon menú responsive
$(document).ready(function() {
    $(".icon-nav-mobile").click(function() {
        $(this).toggleClass("is-active");
    });
});



$(document).ready(function() {
    $('.nav-link_asegurado').click(function() {
        if ($(this).hasClass("change-chevron") === true) {
            $('.nav-link_asegurado').addClass("change-chevron");
            $(this).removeClass("change-chevron");
        } else {
            $('.nav-link_asegurado').addClass("change-chevron");
        }
    });
});

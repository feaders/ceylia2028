$(document).ready(function () {
    animation()
    resizeCarousel()
    $(window).on("resize", function () {
        resizeCarousel()
    })

    $(".toggle-btn").click(function() {
        $("#bio-expanded").slideDown(); // Alterne la classe 'expanded' pour afficher le texte complet
        $(this).hide()
    });

})

function resizeCarousel() {
    $(".carousel").each(function () {
        const height = $(this).find(".carousel-inner").height()
        $(this).find(".carousel-inner .carousel-item img").each(function(index){
            $(this).css("height", height)
        })
    })
}


function animation() {

    $(".title-animate").css("visibility","visible").fadeIn(1500);  // Le texte apparaît en 2 secondes

    $(".col-animate").each(function (index) {
        $(this).css("visibility","visible").delay().slideDown(500+ index * 100)
    })
}
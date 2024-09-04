$(document).ready(function () {
    const $modal = $('#myModal');
    const $modalContent = $('.modal-content');
    const $captionText = $('#caption');
    let slideIndex = 1;
    const $images = $('.lightbox-trigger');

    // Dynamically generate slides from the carousel images
    $images.each(function (index, img) {
        const $slideDiv = $('<div class="mySlides"></div>');
        if (index === 0) {
            $slideDiv.css('display', 'block'); // Show first image
        }

        const $numberText = $('<div class="numbertext text-center"></div>').text((index + 1) + ' / ' + $images.length);
        const $imgClone = $(img).clone().css('height', '65vh');

        $slideDiv.append($numberText).append($imgClone);
        $modalContent.append($slideDiv);

        // Add click listener to open modal
        $(img).on('click', function () {
            openModal();
            currentSlide(index + 1);
        });
    });

    // Function to open modal
    function openModal() {
        $modal.css('display', 'block').css("top", $(document).scrollTop());
        showOverflow(false)
    }

    // Function to close modal
    window.closeModal = function () {
        $modal.css('display', 'none');
        showOverflow(true)
    };

    // Show slides based on index
    function showSlides(n) {
        const $slides = $('.mySlides');
        if (n > $slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = $slides.length; }
        $slides.hide();
        $slides.eq(slideIndex - 1).css('display', 'block');
        $captionText.text($images.eq(slideIndex - 1).attr('alt'));
    }
    function showOverflow(active) {
        if (active) {
            // Réactiver l'overflow pour permettre le défilement
            $('body').css('overflow', 'auto');
        } else {
            // Désactiver l'overflow pour empêcher le défilement
            $('body').css('overflow', 'hidden');
        }
    }

    // Navigate to next/previous slide
    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    };

    // Set current slide
    window.currentSlide = function (n) {
        showSlides(slideIndex = n);
    };
});

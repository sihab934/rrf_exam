/*menu for mobile devices */
$(document).ready(function(){
    $(".about, .services, .protfolio, .blog").click(function () {
        $(".about, .services, .protfolio, .blog").removeClass("active");
        $(this).addClass("active");  
    });

    $(".about, .services, .protfolio, .blog").hover(
        function () {
            $(this).addClass("hovered"); 
        },
        function () {
            $(this).removeClass("hovered"); 
        }
    );

    $(".menu-btn, .fa-xmark").click(function () {
      $("#navPhone").toggleClass("hidden");
    });

    $("#navPhone a").click(function () {
      $("#navPhone").addClass("hidden");
    });


// Initialize center mode carousel with responsive settings
$(".card-list").slick({ 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    dots: false, 
    arrows: true,
    prevArrow: "<span class='left-arrow'><i class='bx bx-chevron-left'></i></span>",
    nextArrow: "<span class='right-arrow'><i class='bx bx-chevron-right'></i></span>",
    responsive: [
        {
            breakpoint: 850, // below lg
            settings: {
                arrows: false, // hide arrows on smaller screens
            }
        }
    ]
    
});

// Smooth scrolling for anchor links
    $('a[href^="#"]').click( function (e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800); 
        }
    });

    // Add a class to the header when scrolling
    $(window).click(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
});
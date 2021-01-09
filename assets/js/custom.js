$(function() {
    'use strict';
    $(window).on("scroll", function() {
        if ($(document).scrollTop() > 20) {
            $(".custom-nav").addClass("fixed-top");
            $(".header-top-area").css("display", 'none');
            $("#hasTop > .mean-bar").css("top", '0');
        }
        else {
            $(".custom-nav").removeClass("fixed-top");
            $(".header-top-area").css("display",'block');
            $("#hasTop > .mean-bar").css("top", '122px');
        }
    });
    // active nav
    $('.navbar-nav .nav-item').on('click', function() {
        $('.navbar-nav .nav-item.active').removeClass('active');
        $(this).addClass('active');
    });
    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(400); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(400); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

    //credit to Sebastian Popp as per https://codepen.io/sebastianpopp/pen/myYmmy
    $("#inpt_search").on('focus', function() {
        $(this).parent('label').addClass('active');
        $("#inpt_search").val(search); //keeps last search term until user erases it themselves
    });

    $("#inpt_search").on('blur', function() {
        $(this).parent('label').removeClass('active');
        search = $("#inpt_search").val();
        $("#inpt_search").val(""); //erase search term when search is unfocused
    });

    //Meanmenu
    $('.mean-wrapper').meanmenu({
        meanScreenWidth: "991"
    });

    // advisor
    $('.advisor-slider').owlCarousel({
        // autoplay: true,
        // autoplayTimeout: 5000,
        loop: true,
        margin: 20,
        dots: false,
        navigation : true, // Show next and prev buttons
        nav: true,
        navText : ["<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
    
            1000: {
                items: 1
            },
        }
    })

    // banner
    $('.banner-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        loop: true,
        margin: 20,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
    
            1000: {
                items: 1
            },
        }
    })
    // testimonial
    $('.testimonial-slider').owlCarousel({
        // autoplay: true,
        // autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        loop: true,
        margin: 20,
        dots: true,
        nav:false,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                    items: 1
            },
        
            1000: {
                items: 1
            },
        }
    })
		
	// Count Time JS
    function makeTimer() {
        var endTime = new Date("november  30, 2021 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() { makeTimer(); }, 300);

    //preloader
    setTimeout(function(){
        $('.loader_bg').fadeToggle();
    }, 1500);

    // Owl carousel thumb

    $('.solution-content').owlCarousel({
        thumbs: true,
        thumbsPrerendered: true,
        navigation:true,
        nav:true,
        dots: false,
        stagePadding: 0,
        margin: 12,
        navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>"
		],        
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    });
    // Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
    });
    
    // advisor slides
    $('.advisor-slides').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 20,
        dots: false,
        nav:false,
        navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>"
		],  
        responsive: {
            0: {
                    items: 1
            },
        
            1000: {
                items: 1
            },
        }
    })
    // client
    $('.client-slides').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
    
            1000: {
                items: 1
            },
        }
    })

    //solution-slides-two
    $('.solution-slides-two').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
			"<i class='fas fa-caret-left'></i>",
			"<i class='fas fa-caret-right'></i>"
		],  
        responsive: {
            0: {
                items: 1
            },
    
            1000: {
                items: 1
            },
        }
    })

    //Fun Facts
    function animateFacts(fact) {
        if ($.fn.visible && $(fact).visible() && !$(fact).hasClass('animated')) {
            $(fact).animateNumber({
                number: parseInt($(fact).data('target'), 10)
            }, 2000);
            $(fact).addClass('animated');
        }
    }
    
    function initFunFacts() {
        var funFacts = $('.fun-box').find('.value');
        funFacts.each(function() {
            animateFacts(this);
        });
    }
    
    initFunFacts();
    
    $(window).on("scroll", function() {
        initFunFacts();
    });


    $('.testimonial-content-slider').owlCarousel({
        thumbs: true,
        thumbsPrerendered: true,
        navigation:true,
        dots:true,
        stagePadding: 0,
        margin: 12,      
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    });

});
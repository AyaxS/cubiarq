$( document ).ready(function() {
    var windowHeight = $(window).height();
    $(".auto--height").css('height', windowHeight);

    $('.ancla').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
        $('body,html').stop(true,true).animate({				
            scrollTop: $(strAncla).offset().top
        },1000);
	});
	
	const header = document.querySelector("#header");
	const headroom = new Headroom(header);
    headroom.init();

    (function( $ ){
	    $.animate = function(options) {
	        var defaults = {
	            items: '.animate:visible',
	            class: 'animate-in',
	            added_height: 150,
	            before_height: 0
	        };
	        var opts = $.extend(defaults, options);
	        var init = function(){
	            if ( $(opts.items).length ){
	                $('body').find( opts.items ).each(function(){
	                    var _top = parseInt( $(this).offset().top );
	                    var _current = parseInt( $(window).scrollTop() );
	                    if ( _top < _current ){
	                        $(this).addClass( opts.class )
	                    }
	                });
	            }
	            $(window).on('scroll',function(){
	                var top = $(window).scrollTop() + 600;
	                find( top );
	            }).scroll();
	        }
	        var find = function(scroll){
	            if ( $(opts.items).length ){
	                var top_previous = 0;
	                var items = 0;
	                var delay = 0;
	                var not_class = '.'+opts.class;
	                $(opts.items).not(not_class).each(function(index,element){
	                    var $element = $(element);
	                    var top_current = $element.offset().top;
	                    if (scroll + opts.added_height > top_current + opts.before_height) {
	                        $element.addClass(opts.class);
	                        if ( top_current === top_previous ){
                                items++;
                                delay = items / 5;
                                // css delay animation
                                $element.css({
                                    '-webkit-animation-delay' : delay + 's',
                                    '-moz-animation-delay' : delay + 's',
                                    'animation-delay' : delay + 's'
                                });
	                        }
	                        top_previous = top_current;
	                    }
	                });
	            }
	        }
	        init();
	    }
	})( jQuery );
	$.animate();

	$('.carousel-clientes').slick({
		arrows: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: '<span class="slick-prev"><img src="./assets/img/arrow-left.png" alt=""></span>',
      	nextArrow: '<span class="slick-next"><img src="./assets/img/arrow-right.png" alt=""></span>',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
  		autoplaySpeed: 5000,
		//fade: false,
		dots: false
	});

	$('.content-gallery').slick({
		arrows: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: '<span class="slick-prev"><img src="./assets/img/arrow-left.png" alt=""></span>',
      	nextArrow: '<span class="slick-next"><img src="./assets/img/arrow-right.png" alt=""></span>',
		centerMode: true,
		centerPadding: '120px',
		slidesToShow: 1,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: true,
			  centerMode: false,
			  centerPadding: '0px',
			  slidesToShow: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: true,
			  centerMode: false,
			  centerPadding: '0px',
			  slidesToShow: 1
			}
		  }
		]
	});

	$('.planos-carousel').slick({
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: '<span class="slick-prev"><img src="./assets/img/arrow-left.png" alt=""></span>',
      	nextArrow: '<span class="slick-next"><img src="./assets/img/arrow-right.png" alt=""></span>',
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("canvas").hide();
		$('.auto--height').css('min-height', '477px');
		$(".auto--height").css('height', 'auto');
	}
});
/***************************************************************************
  Aici vor fi funcțiile folosite doar pentru MPass, 
****************************************************************************/

/* Hide Header on on scroll down */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-fixed-top').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar-fixed-top').removeClass('scrolled-up').addClass('scrolled-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar-fixed-top').removeClass('scrolled-down').addClass('scrolled-up');
        }
    }
    
    lastScrollTop = st;
}

/* dinamically add background from html */
  $.each($('[data-bg]'), function(){
      if ($(this).attr('data-bg').length > 0){
        $(this).css('background-image', 'url('+ $(this).attr('data-bg') +')');
      }
  });

/* initializing demo-select (select2.js) in forms.html */
if ($('select.demo-select').width() > 0) {
	$('select.demo-select').select2({
		minimumResultsForSearch: Infinity  //hiding the searchbox !!!
	});
}

/* tooltips an popovers */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$(function () {
  $('[data-toggle="popover"]').popover()
});

/* check value of telephone input on login form */
if ($('#telPhone').width() > 0) {
	$('#telPhone').on('keyup', function() {
	    var maxlength = $(this).attr('maxlength');
		var val = $(this).val();
		if (val.length == maxlength) {
			$('.mob_sign>.btn').removeClass('disabled').addClass('btn-primary');
	        $(this).parent().addClass('succes-state');
	    }
	});
}

/* smooth scroll to div (faq.html && terms_condiitons.html) */
    $(function() {
      $('.terms-menu a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 130
            }, 1000);
            return false;
          }
        }
      });
    });

/* sidebar height in serviciu_selectat.html */
    if ($('.service-selected-wrapp').width() > 0) {
      $(window).resize(function() {
          $('.service-selected-wrapp').height($('.personalInfo-blk').height() - 62 );
      });
      $(window).trigger('resize');
    }

/* refresh page on resize window */
$(window).on('orientationchange', function(){location.reload();});















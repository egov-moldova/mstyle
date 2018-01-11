/***************************************************************************
  Aici vor fi funcțiile folosite doar pentru MPsign, 
****************************************************************************/

// Hide Header on on scroll down
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
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
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

//dinamically add background from html
  $.each($('[data-bg]'), function(){
      if ($(this).attr('data-bg').length > 0){
        $(this).css('background-image', 'url('+ $(this).attr('data-bg') +')');
      }
  });

// initializing demo-select (select2.js) in forms.html
if ($('select.demo-select').width() > 0) {
	$('select.demo-select').select2({
		minimumResultsForSearch: Infinity  //hiding the searchbox !!!
	});
}

// all show code buttons functionality
$('.show_code').click(function(){
    var $this = $(this);
    $this.toggleClass('isOpen');
    if($this.hasClass('isOpen')){
        $this.text('Ascunde codul');         
    } else {
        $this.text('Afișează codul');
    }
});

// tooltips an popovers
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$(function () {
  $('[data-toggle="popover"]').popover()
});

// check value of telephone input on login form
if ($('#telPhone, #idnp').width() > 0) {
	$('#telPhone, #idnp').on('keyup', function() {
	    var maxlength = $(this).attr('maxlength');
		var val = $(this).val();
		if (val.length == maxlength) {
			$('.mob_sign>.btn').removeClass('disabled').addClass('btn-primary');
	     $(this).parent().addClass('has-success').removeClass('default-state');
	    }
	});
}

// datepicker initializing
 // default
if ($('.input-group.date, #calendar-datepicker, #datepicker-range').length > 0) {

  $('.input-group.date').datepicker({
    orientation: "top auto",
    language: "ro",
    todayHighlight: true
  });

 // inline(calendar)
 $('#calendar-datepicker').datepicker({
    weekStart: 1,
    maxViewMode: 1,
    language: "ru",
    todayHighlight: true
  });
 // interval zile (range)
 $('#datepicker-range').datepicker({
    weekStart: 1,
    maxViewMode: 1,
    language: "ro",
    orientation: "top right",
    todayHighlight: true
 });

}

// smooth scroll to div (faq.html && terms_condiitons.html)
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
// ------------- Msign ----------------------- //
// function to show file name on file upload button !!!!
  $(function() {

    // We can attach the `fileselect` event to all file inputs on the page
    $(document).on('change', ':file', function() {
      var input = $(this),
          numFiles = input.get(0).files ? input.get(0).files.length : 1,
          label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
          input.trigger('fileselect', [numFiles, label]);

    });
  });
  $(document).ready( function() {
        $(':file').on('fileselect', function(event, numFiles, label) {
            var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;

            if( input.length ) {
                input.val(log);
                input.addClass('inputed');
                $('.drag_drop span').hide();
            } else {
                if( log ) alert(log);
            }

        });

        // send mail functionality
       $('#sendEmail').on('click', function(){
         $('input, textarea').val('');
         $('.respond-alert').fadeIn('slow');
       });
    });

// refresh page on resize window
$(window).on('orientationchange', function(){location.reload();});
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

// servicii.gov.md - index.html to select(search) list - DEMO - !!!
if($('#tags').length > 0){
  function cauta(x){
    var availableTags = [
        "Caută denumire serviciu",
        "Caută denumire serviciu în Persoane fizice",
        "Caută denumire serviciu în Business",
        "Caută denumire serviciu în Scenarii de viață",
        "Caută denumire serviciu în Vizitatori/nerezidenți",
    ];
    for (var i = 0, len = availableTags.length; i < len; i++) {
      availableTags[i] = availableTags[i].replace("denumire serviciu",x);
    } return availableTags;
  }
  $( function() {
      $( "#tags" ).autocomplete({
        source: function( request, response ){
          response(cauta(request.term));
        }
      }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
        return $( "<li></li>" ).data("item.autocomplete", item)
        .append( item.value.replace($('#tags').val(),"<strong>"+$('#tags').val()+"</strong>"))
        .appendTo( ul );
      };
  });
}

// servicii.gov.md - index_old1.html & index_old2.html carousel
if ($(".life-carousel") .length > 0) {
  $(".life-carousel").owlCarousel({
      loop: true,
      margin: 30,
      slideBy: 4, 
      autoplay: true,
      autoplayTimeout: 9000,
      autoplayHoverPause: true,
      responsive : {
          0 : {
              items : 1,
          },
          480 : {
              items : 2,
          },
          768 : {
              items : 3,
          },
          960 : {
              items : 4,
          }
      }
  });
}

// change plus(+) with minus(-) on service_details.html
$('.panel-heading a').on('click', function(){
  $(this).find('small').html('-');
  $(this).parent().parent().siblings().find('small').html('+');
});


// closing top alert
if ( $( ".top-alert-info" ).length) {
    $( "#page-content" ).css("padding-top","165px");
    $(".navbar-fixed-top").css("padding-top","43px");
} 
$('.top-alert-info .close').on('click', function(){
    $( "#page-content" ).css("padding-top","120px");
    $(".navbar-fixed-top").css("padding-top","0");
});

// contul-meu-subpage.html inaltimea tabelului == cu inaltimea sidebarului
var height = $('aside.col-md-3').height();
$('.account-respond').height(height - 61);

// contul-meu-subpage.html loading circle - timpul pentru a aparea datele generate DEMO!!!!
setTimeout(function(){
   $('.account-respond .table').show();
   $('.account-respond div.loading').hide();
}, 2000);

$('.widget-collapse').on('show.bs.collapse', function () {
  $(this).siblings().removeClass('in');
});

// refresh page on resize window
$(window).on('orientationchange', function(){location.reload();});


$(document).ready(function() {
  
  // afisarea 'badges' la pagina contul-meu-widgets.html DEMO!!!
  timer = setTimeout(function () {
    $('.badge1').fadeIn();
  }, 1000);
  timer = setTimeout(function () {
    $('.badge2').fadeIn();
  }, 2000);
  timer = setTimeout(function () {
    $('.badge3').fadeIn();
  }, 3000);
  timer = setTimeout(function () {
    $('.badge4').fadeIn();
  }, 5000);


});
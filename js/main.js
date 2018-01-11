/***************************************************************************
  Aici vor fi funcțiile folosite doar pentru ghid, 
****************************************************************************/

/* set navbar brand width */ 
// $('.navbar-brand').each(function(){
//     var width = $('.container').width() -  $('.navbar-right').width();
//     $(this).width(width);
// });

/* increase and decrease page font size*/ 
$('#fontChange, #fontChange2').on('click', function(){
  $('#page-content').toggleClass('fontChanged');
  $(this).children().text(function(i, text){
    return text === "-" ? "+" : "-";
  })
});

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

  $("select.demo-select.multiple-select").select2({
    placeholder: "Alege opțiunea",
  });
}

/* all show code buttons functionality (collapsed elements) - Afișează codul */
$('.show_code').click(function(){
    var $this = $(this);
    $this.toggleClass('isOpen');
    if($this.hasClass('isOpen')){
        $this.text('- Ascunde codul');         
    } else {
        $this.text('+ Afișează codul');
    }
});

/* tooltips and popovers */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
  })
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

/* datepicker initializing */
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

/* refresh page on resize window */
$(window).on('orientationchange', function(){location.reload();});


/* buton with loader exemple (on click) */
$('#load').on('click', function() {
    var $this = $(this);
  $this.button('loading');
    setTimeout(function() {
       $this.button('reset');
   }, 8000);
});

/* autoresize textarea by content */
  $('.form-group.autoresize').on( 'change keyup keydown paste cut', 'textarea', function (){
      $(this).height(0).height(this.scrollHeight);
  }).find( 'textarea' ).change();

/* checkboxes styling clases */
function changeState(el) {
  if (el.readOnly) el.checked=el.readOnly=false;
  else if (!el.checked) el.readOnly=el.indeterminate=true;
}

/* showing modal window on hover */
$( "#hoverModal" ).hover(function() {
  $('.bs-example-modal-sm').modal({
    show: true
  });
});  

/* carousel exemple */
if ($(".life-carousel").length > 0) {
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
          970 : {
            items : 4,
          }
      }
  });
}

/* search box list - DEMO - !!! */
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


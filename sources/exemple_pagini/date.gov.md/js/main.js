/***************************************************************************
  Aici vor fi funcțiile folosite doar pentru Date.Gov.MD 
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
    
    /* Make sure they scroll more than delta */
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
if($('select.demo-select').length > 0){
	$('select.demo-select').select2({
		minimumResultsForSearch: Infinity  //hiding the searchbox !!!
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

/* refresh page on click */ 
$('#refreshPage').click(function() {
    location.reload();
});

/* checkbox styling label color text */
$('.checkbox.rounded label').on('click', function(){
  $(this).parent().parent().toggleClass('checked');
});

/* date-set-date.html change text in panel body btn('Arata mai multe informatii > Ascunde') */
  $("#accordion-date.panel-group .panel-body .btn-link").click(function () {
    $(this).text(function(i, v){
      return v === 'Ascunde' ? 'Arată mai multe informații' : 'Ascunde'
    });
  });

/* date-set-date.html change text in flux de activitate btn('Vezi toți itemii din fluxul de activitate > Ascunde') */
  $(".viewList-btn .btn-link").click(function () {
    $(this).text(function(i, v){
      return v === 'Ascunde' ? 'Vezi toți itemii din fluxul de activitate' : 'Ascunde'
    });
    $(this).siblings().toggleClass('fa-minus-circle');
  });

